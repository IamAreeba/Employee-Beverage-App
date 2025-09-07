

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// Placing user order from client
const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        });

        await newOrder.save()
        await userModel.findByIdAndUpdate(req.userId, { cartData: {} }) // setting with empty obj so it will clear the cart data
        res.json({ success: true, message: "We did it" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}


// Geting User order from frontend
const userOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({userId: req.userId})
        res.json({ success: true, data: orders })
        

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}



// Listing orders of user from admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}



// This is the API for updating the status
const updateStatus = async (req, res) => {
    try {
        
        await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status})
        res.json({ success: true, message: "Status Updated" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}


export { placeOrder, userOrder, listOrders, updateStatus }