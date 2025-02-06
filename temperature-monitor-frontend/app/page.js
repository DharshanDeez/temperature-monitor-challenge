"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socketurl = process.env.NEXT_PUBLIC_API_URL;

const socket = io(socketurl);

export default function Home() {
  const [temperature, setTemperature] = useState(null);
  const [status, setStatus] = useState("NORMAL");
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    console.log(socketurl);
    socket.on("temperature_reading", (data) => {
      setTemperature(data.temperature);
      setStatus(data.status);
      setReadings((prev) => [data, ...prev].slice(0, 5));
    });

    return () => {
      socket.off("temperature_reading");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-black  mb-8">
          Temperature Monitor
        </h1>
        <div className="text-center mb-8">
          <h2 className="text-4xl text-black font-semibold">
            {temperature ? `${temperature}°C` : "Loading..."}
          </h2>
          <p
            className={`text-lg mt-2 ${
              status === "HIGH" ? "text-red-600" : "text-green-600"
            }`}
          >
            {status} - Last updated: 2 seconds ago
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">
            Recent Readings
          </h3>
          <ul className="space-y-2">
            {readings.map((reading, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <span className="text-lg text-black font-semibold">
                  {reading.temperature}°C
                </span>
                <span
                  className={`text-sm ${
                    reading.status === "HIGH"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {reading.status}
                </span>
                <span className="text-sm text-black">
                  {new Date(reading.timestamp).toLocaleTimeString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
