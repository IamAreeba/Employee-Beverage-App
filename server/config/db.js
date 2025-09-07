
// import mongoose from 'mongoose'

// export const connectDB = async () => {
//     await mongoose.connect(`${process.env.MONGODB_URI}/unikrew_orders`)
//     console.log("DB Connected")

//     mongoose.connection.on('Connected', () => {
        
//     })
// }




import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB Connected")
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/unikrew_orders`)

    } catch (error) {
        console.error(error.message)
    }

}


