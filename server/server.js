import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import cookieParser from 'cookie-parser'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()

// Allowing to access from multiple origin
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://employee-beverage-client.vercel.app', 'https://employee-beverage-app-admin.vercel.app']

// middleware Config
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, credentials: true }))

// db connections
await connectDB()

// API Endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))   // ⚠️ won’t work on Vercel (uploads not persistent)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Local server running on http://localhost:${PORT}`);
});



// ✅ No app.listen() on Vercel
export default app
