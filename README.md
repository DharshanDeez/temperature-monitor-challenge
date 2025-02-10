# Real-Time Temperature Monitoring System

A real-time temperature monitoring system built with **Next.js** (frontend), **Node.js** (backend), and **MongoDB** (database). The system displays real-time temperature readings and updates the status (`NORMAL` or `HIGH`) based on predefined thresholds.

## Features

- **Real-Time Updates**: Temperature readings are updated every 2 seconds
- **Status Indicators**: Displays `NORMAL` (green) or `HIGH` (red) status for each reading
- **Recent Readings**: Shows the last 5 temperature readings with timestamps
- **Responsive UI**: Built with **Tailwind CSS** for a clean and modern design

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone <Repository_url>
   cd Folder_Name
   ```

2. **Set Up the Backend**

   ```bash
   # Navigate to the backend directory
   cd temperature-monitor-backend

   # Install dependencies
   npm install

   # Create .env file and add MongoDB connection string
   echo "MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/temperatureDB?retryWrites=true&w=majority" > .env

   ```

3. **Set Up the Frontend**

   ```bash
   # Navigate to the frontend directory
   cd temperature-monitor-frontend

   # Install dependencies
   npm install

   # Create .env file and add backend API URL
   echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env

   ```

4. **Access the Application**
   - Open your browser and navigate to `http://localhost:3000`

### MongoDB Setup

- If using MongoDB Atlas:
  - Ensure your IP address is whitelisted in the MongoDB Atlas dashboard
- If using local MongoDB:
  - Ensure the MongoDB server is running

## Project Structure

```
temperature-monitor/
├── temperature-monitor-backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── temperature-monitor-frontend/
│   ├── pages/
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css
│   ├── package.json
│   └── .env
└── README.md
```

## Environment Variables

### Backend (.env)

- `MONGODB_URI`: MongoDB connection string

### Frontend (.env)

- `NEXT_PUBLIC_API_URL`: Backend API URL (e.g., `http://localhost:5000`)

## Running the Application

1. Start the backend server:

   ```bash
    - cd temperature-monitor-backend
    - npm run dev
         (or)
   # use Docker command
    - docker-compose up
   ```

2. Start the frontend development server:

   ```bash
   cd temperature-monitor-frontend
     - npm run dev
          (or)
   # use Docker command
     - docker-compose up
   ```

3. Open your browser and navigate to `http://localhost:3000`

Support
If you have any questions, suggestions, or run into any issues, feel free to:

Open an issue in the repository
Contact me at dharshandeez111@gmail.com
Connect with me on https://www.linkedin.com/in/dharshan-a-1a9984278/

I'm always happy to help! 😊
