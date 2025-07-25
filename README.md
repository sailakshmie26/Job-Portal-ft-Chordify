# 💼 Real-Time Job Portal – MERN Stack Project

A fully-functional job portal built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring **real-time job application notifications** via **Socket.IO**.

---

## 🚀 Live Demo

- 🔗 **Frontend (Vercel)**: [https://job-portal-ft-chordify-41dd.vercel.app](https://job-portal-ft-chordify-41dd.vercel.app)  
- 🔗 **Backend (Render)**: [https://job-portal-ft-chordify-01.onrender.com](https://job-portal-ft-chordify-01.onrender.com)  
- 💻 **GitHub Repository**: [View Code](https://github.com/sailakshmie26/Job-Portal-ft-Chordify)

---

## ✨ Features

- 👤 **User Authentication** (JWT-based)
- 👥 **Role-based Access** (Job Seeker / Employer)
- 📝 **Job Management** (Post, Edit, Delete - Employers)
- 📄 **Job Listings & Apply** (Job Seekers with Cover Letter + Resume URL)
- 💾 **Save/Like Jobs**
- 🔔 **Real-time Notifications** using Socket.IO (for new applications)
- 🔢 **Application Count Updates** on job posts
- 📱 **Responsive Frontend UI** (built with React & Vite)

---

## 🛠️ Tech Stack

### Frontend:
- React
- Vite
- Axios
- React Router
- Socket.IO Client

### Backend:
- Node.js
- Express.js
- MongoDB (Cloud Atlas)
- Mongoose
- JWT Authentication
- Socket.IO (real-time)

### Deployment:
- 🔧 **Frontend**: Vercel
- 🔧 **Backend**: Render

---

## 🗂️ Project Structure

Job-Portal-ft-Chordify/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ └── vite.config.js
└── README.md

## 🧪 Testing Instructions

- Register as an **Employer** → Post Jobs
- Register as a **Job Seeker** → Apply to posted jobs
- Use two tabs to see **real-time updates** on Employer dashboard when a new application is submitted
- Test saving/unsaving jobs, and application list fetching

---

## 🧾 Installation (For Local Setup)

1. **Clone the repository**:
```bash
git clone https://github.com/sailakshmie26/Job-Portal-ft-Chordify.git
