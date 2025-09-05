
import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://unikrew:unikrew123@cluster0.qpjcsbc.mongodb.net/unikrew_orders')
    console.log("DB Connected")
}