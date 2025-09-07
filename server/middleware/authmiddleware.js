
import jwt from "jsonwebtoken"


// This middleware take the token and convert it in userId and with that id we can add, remove,get data from cart
const authMiddleware = (req, res, next) => {
    const {token} = req.cookies

    if(!token){
        return res.json({ success: false, message: "Not Authorized Login Again" })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if(tokenDecode.id){
            // req.body.userId = tokenDecode.id
            req.userId = tokenDecode.id
        }
        else{
            return res.json({ success: false, message: "Not Authorized" })
        }
        next()

    } catch (error) {
        return res.json({ success: false, message: error.message })
    }

}
 





export default authMiddleware