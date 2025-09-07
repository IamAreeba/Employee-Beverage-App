

import userModel from "../models/userModel.js";

// Add Items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId) // This we will get using middleware
        let cartData = await userData.cartData

        const itemId = req.body.itemId; 

        if (!itemId) {
            return res.status(400).json({ success: false, message: "Item ID is required" });
        }

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }


        await userModel.findByIdAndUpdate(req.userId, { cartData })
        return res.json({ success: true, message: "Added to cart" })



    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}


// Remove Items from User Cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId)
        let cartData = await userData.cartData

        const itemId = req.body.itemId;

        if (cartData[itemId] > 0) {
            cartData[itemId] -= 1
        }
        // Now updating the cardData
        await userModel.findByIdAndUpdate(req.userId, { cartData })
        return res.json({ success: true, message: "Removed from cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}


// Fetch User Cart Data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId)
        let cartData = await userData.cartData
        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error })
    }
}


export { addToCart, removeFromCart, getCart }