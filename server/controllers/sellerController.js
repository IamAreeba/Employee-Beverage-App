


// Function for generating token
const createToken = (id) => {
    return jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
}

// Login As seller
const sellerLogin = async (req, res) => {
   try {
    
     const { email, password } = req.body

    if(password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL){
        const token = createToken(email)

        res.cookie('sellerToken', token, {
            httpOnly: true,   // Preventing JS to access the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in prod
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // Help secure from CSRF prod
            maxAge: 7 * 24 * 60 * 60 * 1000  // Cookie expiration time

        })
        return res.json({ success: true, message: "Logged In" })
    }

    else{
        return res.json({ success: true, message: "Invalid Credentials" })
    }

   } catch (error) {
        return res.json({ success: false, message: `Error: ${error}` })
   }

}



// Checking Seller Authentication
const sellerIsAuth = async (req, res) => {
    try {
        return res.json({ success: true })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: `Error: ${error}` })
    }
}


const sellerLogout = async (req, res) => {
    try {

        res.clearCookie('sellerToken', {
            httpOnly: true,   // Preventing JS to access the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in prod
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // Help secure from CSRF prod
        })
        return res.json({ success: true, message: "Seller Logged Out" })

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: `Error: ${error}` })
    }
}



export { sellerLogin, sellerIsAuth, sellerLogout }