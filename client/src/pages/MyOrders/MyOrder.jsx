import React from 'react'
import './MyOrder.css'
import { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axiosInstance from '../../axios'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {

    const { token, cartItems, setCartItems } = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrdrs = async () => {
        const responce = await axiosInstance.post("/api/order/userorders", {}, {  headers: { Authorization: `Bearer ${token}` } })
        // if(responce.data.success){
        //     alert("We did it")
        //     console.log(responce.data)
        // }
        // else{
        //     alert("Error")
        // }
        setData(responce.data.data)
        console.log(responce.data.data)
    }

const navigate = useNavigate();
    const handleReorder = (order) => {
        const newCart = { ...cartItems }
        order.items.forEach(item => {
            if (newCart[item._id]) {
                newCart[item._id] += item.quantity
            } else {
                newCart[item._id] = item.quantity
            }
        })
        setCartItems(newCart)
        navigate('/cart') 
    };



    useEffect(() => {
         console.log("Token:", token); 
        if (token) {
            fetchOrdrs()

        }
    }, [token])

    return (
        <div className='my-orders'>

            <h2>My Orders</h2>

            <div className="container">

                {data.map((order, index) => {

                    return (

                        <div key={index} className='my-orders-order' >
                            <img src={assets.parcel_icon} alt="" />
                            <p> {order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " x " + item.quantity
                                }
                                else {
                                    return item.name + " x " + item.quantity + " , "
                                }
                            })} </p>

                            <p> {order.amount}.00 </p>
                            <p> Items: {order.items.length} </p>
                            <p> <span> &#x25cf; </span>  <b> {order.status} </b> </p>
                            <button onClick={() => handleReorder(order)}>Reorder</button>


                            <button onClick={fetchOrdrs} > Track Order </button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MyOrder