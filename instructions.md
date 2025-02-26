# Student Attendance Tracking System (Electron App)

## Overview
Cross-platform desktop application for student attendance tracking using Electron.js, React.js, and TailwindCSS v4.0.

## Core Features

### 1. Authentication
- Login/Signup with email and password
- SQLite storage with bcrypt password hashing

### 2. Navigation
- Dashboard: Stats and reports
- Students: Record management
- Attendance: Daily tracking
- Settings: User preferences

### 3. Main Features
- **Dashboard**: Summary cards, attendance charts (bar & pie)
- **Student Management**: CRUD operations, search/filter
- **Attendance Tracking**: Present/absent marking, monthly filters
- **Settings**: Profile management, preferences

## Tech Stack
- **Frontend**: Electron.js, React.js, TailwindCSS v4.0
- **Backend**: Node.js
- **Database**: SQLite
- **Other**: bcrypt.js, Recharts/Chart.js, Redux/Context

## Requirements
- Electron IPC communication
- Role-based access (Admin/Teacher)
- Responsive design
- Offline support

# Project Structure

📁 STUDENT_ATTENDANCE_TRACKER
├── 📁 src
│   ├── 📁 main
│   │   └── index.js
│   └── 📁 renderer
│       ├── 📁 src
│       │   ├── 📁 components
│       │   │   
│       │   ├── 📁 pages
│       │   │   
│       │   ├── App.jsx
│       │   └── main.jsx
│       └── index.html
├── 📁 resources
│   └── logo.png
├── package.json
├── electron.vite.config.js
├── .gitignore
├── .prettierrc.yaml
└── README.md


# Rules
- All new components should go in components and be named like example-components.tsx unless otherwise specified
- All new pages go in pages