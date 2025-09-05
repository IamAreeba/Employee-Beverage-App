
import express from 'express'
import cors from "cors"


// Application config
const app = express()
const PORT = 5000


// middleware
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send("API Working")
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})