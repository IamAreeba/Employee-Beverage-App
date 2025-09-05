
import express, { Router } from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


// Application config
const app = express()
const PORT = 5000


// middleware
app.use(express.json())
app.use(cors())

// db connections
connectDB()


// API Endpoints
app.use("/api/food", foodRouter)
// When running this route this uploads folder will be exposed on this endpoint.Like we mounted this folder on this endpoint 
app.use("/images", express.static('uploads'))

app.get('/', (req, res) => {
    res.send("API Working")
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})


// mongodb+srv://unikrew:unikrew123@cluster0.qpjcsbc.mongodb.net/?
