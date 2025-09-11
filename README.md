
# 🍵 Employee Beverage Ordering System

Cross-platform system for employees to order beverages with customizations and recurring options, plus a staff portal for managing and delivering orders.


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

## 📸 Screenshots

### Employee App

<img width="624" height="293" alt="image" src="https://github.com/user-attachments/assets/72cf7ce9-5fa8-4e5d-9fcf-fe1355d0d7a0" />
<img width="624" height="187" alt="image" src="https://github.com/user-attachments/assets/515e1372-64c8-482b-81b5-9fa17037b3f6" />
<img width="624" height="281" alt="image" src="https://github.com/user-attachments/assets/2f4828df-76ec-4117-8d7e-07c8b8565ae5" />
<img width="624" height="235" alt="image" src="https://github.com/user-attachments/assets/b20c015e-260e-4253-9d4e-9c6f50aefeec" /> 
<img width="624" height="301" alt="image" src="https://github.com/user-attachments/assets/4d4677da-4f64-454b-b8b9-ac860d243783" />
<img width="624" height="202" alt="image" src="https://github.com/user-attachments/assets/c4049c91-f7a1-4365-b902-6e77347d8dd4" /> 
<img width="624" height="311" alt="image" src="https://github.com/user-attachments/assets/e0adf806-983b-426c-a0a7-6ff266fe6cbd" /> 
<img width="624" height="347" alt="image" src="https://github.com/user-attachments/assets/985e807d-284a-445b-b2e9-e1d5d916a972" /> 
<img width="624" height="329" alt="image" src="https://github.com/user-attachments/assets/81f59828-430a-493b-9244-f636574edafc" /> 
<img width="624" height="293" alt="image" src="https://github.com/user-attachments/assets/8d95e32d-5016-4407-9359-d0081080ca83" />


### Staff/Admin-Side 

<img width="624" height="296" alt="image" src="https://github.com/user-attachments/assets/cddfc6cd-8ee5-4ba8-8119-ba67656c554c" /> 
<img width="624" height="308" alt="image" src="https://github.com/user-attachments/assets/c8d0f070-f55a-4e1a-9aa0-f80001586885" /> 


## 👨‍💻 Author

Developed by \[Areeba Amjad]

---
