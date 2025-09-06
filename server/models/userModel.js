import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    cartData: {
        type: Object,
        default: {}
    }

}, { minimize: false } )   // Made it false so that cart data be created even its empty if true then it will not be created


const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel

