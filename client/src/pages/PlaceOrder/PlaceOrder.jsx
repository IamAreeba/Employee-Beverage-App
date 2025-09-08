import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axiosInstance from '../../axios';
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, food_list, url, cartItems } = useContext(StoreContext)

  const location = useLocation();
  const customizations = location.state?.customizations || {};


  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    phone: ""
  })


  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({
      ...data,
      [name]: value
    }))
  }

const placeOrder = async (e) => {
  e.preventDefault();

  let orderItems = [];

  food_list.forEach((item) => {
    if (cartItems[item._id] > 0) {
      orderItems.push({
        _id: item._id, 
        name: item.name,
        price: item.price,
        quantity: cartItems[item._id],
        customizations: customizations[item._id] || {}
      });
    }
  });

  console.log("🛒 Final orderItems:", orderItems);

  let orderData = {
    address: data,
    items: orderItems,
    amount: getTotalCartAmount() + 2
  };

  try {
    let response = await axiosInstance.post("/api/order/place", orderData, {
       headers: { Authorization: `Bearer ${token}` }
    });

    console.log("✅ Backend replied:", response.data);

    if (response.data.success) {
      toast("Order Placed Successfully")
      
    } else {
      toast("Error placing order");
    }
  } catch (err) {
    console.error("❌ Error placing order:", err);
    toast("Something went wrong while placing order");
  }
};

  const navigate = useNavigate()
  useEffect(() => {
    if(!token){
      navigate("/cart")
    }
    else if(getTotalCartAmount() === 0){
      navigate('/')
    }
  }, [token])


  useEffect(() => {
    // console.log(data)
  }, [data])

  return (
    <div>
      <form onSubmit={placeOrder} className="place-order">

        <div className="place-order-left">
          <p className="title"> Delivery Information </p>
          <div className="multi-fields">
            <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name' />
            <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' />
          </div>
          <input required type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' />
          <input requiredtype="text" name='department' onChange={onChangeHandler} value={data.department} placeholder='Department' />

          {/* <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Department' />
          </div> */}

          <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />

        </div>


        <div className="place-order-right">
          <div className="cart-total">
            <h2> Cart Totals </h2>
            <div>

              <div className="cart-total-details"> <p> Subtotal </p> <p> ₨ {getTotalCartAmount()}  </p> </div>
              <hr />
              <div className="cart-total-details"> <p> Service Fee </p> <p> ₨ {getTotalCartAmount() === 0 ? 0 : 2} </p> </div>
              <hr />
              <div className="cart-total-details"> <b> Total </b> <b> ₨ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} </b> </div>

            </div>

            <button onClick={() => navigate('/myorders')} type="submit">
              PLACE ORDER
            </button>

          </div>
        </div>

      </form>

    </div>
  )
}

export default PlaceOrder