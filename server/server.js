
import express, { Router } from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import cookieParser from 'cookie-parser'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'



// Application config
const app = express()
const PORT =  process.env.PORT || 5000



// Allowing to access from multiple origin
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174']


// middleware Config
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: allowedOrigins, credentials: true}))

// db connections
await connectDB()


// API Endpoints
app.use("/api/food", foodRouter)
// When running this route this uploads folder will be exposed on this endpoint.Like we mounted this folder on this endpoint 
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res) => {
    res.send("API Working")
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})


