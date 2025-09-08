
# 🍵 Employee Beverage Ordering System

Cross-platform system for employees to order beverages with customizations and recurring options, plus a staff portal for managing and delivering orders.

---

## 🚀 Live Demo

* **Employee App (Mobile/Web):** [client-app.vercel.app](https://employee-beverage-client.vercel.app/)
* **Staff Portal (Admin):** [admin-portal.vercel.app](https://employee-beverage-app-admin.vercel.app/orders)
* **Backend API:** [server.vercel.app](https://employee-beverage-app.vercel.app/)

📱 Accessible on both desktop and mobile browsers.

---

## 🎥 Demo Video

👉 [Watch the Walkthrough](https://iamareeba.github.io/Employee-Beverage-App/)

---

## ✨ Features

### Employee App (Web / Mobile)

* Order coffee, tea, green tea, and juices.
* Customize order (sugar level, cup size, delivery time, comments).
* Set up **recurring automatic orders**.
* View and manage cart.
* JWT-based authentication (login/signup).

### Staff Portal (React Web App)

* Dashboard with all incoming orders.
* View employee customizations (sugar, size, delivery time, comments).
* Update order status.

### Backend (Node.js + Express + MongoDB)

* Secure REST API with JWT authentication.
* Cart & order management endpoints.
* MongoDB Atlas database integration.

---

## 🛠️ Tech Stack

**Frontend (Employee App):** React.js
**Frontend (Staff Portal):** React.js
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas
**Deployment:** Vercel (frontend + backend)

---

## ⚙️ Setup Instructions (if running locally)

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/employee-beverage-app.git
   cd employee-beverage-app
   ```

2. Install dependencies for server & client:

   ```bash
   cd server && npm install
   cd ../client && npm install
   cd ../admin && npm install
   ```

3. Configure environment variables (`.env` in `/server`):

   ```
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   ```

4. Start backend:

   ```bash
   cd server
   npm start
   ```

5. Start frontend(s):

   ```bash
   cd client   # for employee app
   npm start

   cd ../admin   # for staff portal
   npm start
   ```

---

## 📸 Screenshots (Optional)

*Add 2–3 screenshots of mobile app + staff portal UI here.*

---

## 👨‍💻 Author

Developed by \[Areeba Amjad]

---
