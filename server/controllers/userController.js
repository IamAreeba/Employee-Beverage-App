
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// Function for generating token
const createToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
}


// Login User Logic
const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body
        if(!email || !password){
            return res.json({ success: false, message: "Email and password are required" })
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({ success: false, message: "Invalid email or password" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({ success: false, message: "Invalid email or password" })
        }

        const token = createToken(user._id) 
        res.cookie('token', token, {
            httpOnly: true,   // Preventing JS to access the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in prod
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // Help secure from CSRF prod
            maxAge: 7 * 24 * 60 * 60 * 1000  // Cookie expiration time

        })

        return res.json({ success: true, user: {email: user.email, name: user.name}, token })


    } catch (error) {
        // console.log(error)
        return res.json({ success: false, message: `Error: ${error}` })
    }
}




// Register User Logic
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    try {

        if (!name, !email, !password) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // Checking if user already exist with that email
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // Validating Email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 2) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // Hasing User password. The hogher the no the stronger the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.cookie('token', token, {
            httpOnly: true,   // Preventing JS to access the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in prod
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // Help secure from CSRF prod
            maxAge: 7 * 24 * 60 * 60 * 1000  // Cookie expiration time

        })


        return res.json({ success: true, user: {email: user.email, name: user.name}, token })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: `Error: ${error}` })
    }
}


// Checking Authentication
const isAuth = async (req, res) => {
    try {
        // const { userId } = req.body
        // const user = await userModel.findById(userId).select("-password")

        const user = await userModel.findById(req.userId).select("-password");
        return res.json({ success: true, user })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: `Error: ${error}` })
    }
}



// Logout User
const logout = async (req, res) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,   // Preventing JS to access the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in prod
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // Help secure from CSRF prod
        })
        return res.json({ success: true, message: "Logged Out" })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: `Error: ${error}` })
    }
}

export { loginUser, registerUser, isAuth, logout }