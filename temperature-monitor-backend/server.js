const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
  },
});

// Replace the URI string with your MongoDB Atlas connection string.
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const readingSchema = new mongoose.Schema({
  temperature: Number,
  status: String,
  timestamp: Date,
});

const Reading = mongoose.model("Reading", readingSchema);

io.on("connection", (socket) => {
  console.log("a user connected");

  setInterval(async () => {
    const temperature = (Math.random() * (30 - 15) + 15).toFixed(1);
    const status = temperature > 25 ? "HIGH" : "NORMAL";
    const newReading = new Reading({
      temperature,
      status,
      timestamp: new Date(),
    });
    await newReading.save();

    io.emit("temperature_reading", {
      temperature,
      status,
      timestamp: new Date(),
    });
  }, 2000);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
