# 🚀 LeadDesk Mini

A full-stack lead management application built as part of the **Digital Heroes Full Stack Development Training Task**.

The application allows users to submit leads through a public landing page, while administrators can securely log in to manage, search, and update lead statuses.

---

## 🌐 Live Demo

### Frontend
https://lead-desk-mini-dusky.vercel.app

### Backend API

https://leaddesk-mini-x9hq.onrender.com

### Admin Login
https://lead-desk-mini-dusky.vercel.app/admin

---

## 📂 GitHub Repository

https://github.com/Ann-Annice/LeadDesk-Mini

---

## ✨ Features

### Public Landing Page
- Submit lead details
- Client-side validation
- Server-side validation
- Responsive design

### Authentication
- Secure Admin Login
- JWT Authentication
- Protected Admin Routes

### Admin Dashboard
- View all submitted leads
- Search leads by name
- Update lead status
  - NEW
  - CONTACTED
  - CLOSED

### Database
- PostgreSQL
- Prisma ORM

---

# 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- Prisma ORM
- JWT Authentication
- bcryptjs

### Database
- PostgreSQL (Supabase)

### Deployment
- Vercel
- Render

---

# 📁 Project Structure

```
LeadDesk-Mini
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── middleware
│   ├── prisma
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🗄 Database Schema

## Lead

| Field | Type |
|-------|------|
| id | Integer |
| name | String |
| email | String |
| budget | String |
| message | String |
| status | String |
| createdAt | DateTime |

---

## Admin

| Field | Type |
|-------|------|
| id | Integer |
| email | String |
| password | String (Hashed) |

---

# 🔐 Authentication

The admin dashboard is protected using **JWT (JSON Web Tokens)**.

Workflow:

1. Admin logs in.
2. Server validates credentials.
3. JWT token is generated.
4. Token is stored in the browser.
5. Protected routes require a valid Bearer Token.

Protected APIs:

- GET /api/leads
- PATCH /api/leads/:id

---

# 📡 API Endpoints

## Authentication

POST `/api/auth/login`

---

## Leads

POST `/api/leads`

Create a new lead.

GET `/api/leads`

Fetch all leads.

PATCH `/api/leads/:id`

Update lead status.

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Ann-Annice/LeadDesk-Mini.git
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# ⚙ Environment Variables

Backend `.env`

```env
DATABASE_URL=YOUR_DATABASE_URL
JWT_SECRET=YOUR_SECRET_KEY
```

---

# 🧪 Test Credentials

Email

```
admin@gmail.com
```

Password

```
admin123
```

---

# 🎥 Demo video

https://drive.google.com/file/d/1Q_q73He9hzLc_-kxhoN-OFDzIk8OHNxg/view?usp=sharing

---

# 👩‍💻 Developed By

**Ann Annice**

GitHub:
https://github.com/Ann-Annice

email:
annannice98@gmail.com

---

# 📜 License

This project was developed for the **Digital Heroes Full Stack Development Training Task**.

---

## ⭐ Footer Requirement

The application footer contains the required attribution:

**Built for Digital Heroes Training Task**

https://digitalheroesco.com
