import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axiosInstance from '../../axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = () => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axiosInstance.get("/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  // Updating the status
  const statusHandler = async(e, orderId) => {
    const response = await axiosInstance.post('/api/order/status', {
      orderId,
      status: e.target.value
    })

    if(response.data.success){
      fetchAllOrders()
    }
  }


  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (


    <div className="order add">
      <h3> Order Page </h3>

      <div className="order-list">

        {orders.map((order, index) => {
          return (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />

              <div>
                <p className="order-item-food">

                    {order.items.map((item, i) => {
                      if (i === order.items.length - 1) {
                        return item.name + " x " + item.quantity
                      } else {
                        return item.name + " x " + item.quantity + " , "
                      }
                    })}

                </p>

                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>

                <div className="order-item-address">
                  <p> {order.address.email} </p>
                  <p> {order.address.department} </p>
                </div>

                <p className="order-item-phone">
                  {order.address.phone}
                </p>
              </div>

              <p> Items: {order.items.length} </p>
              <p>Amount: {order.amount}</p>


              <select onChange={(e) => statusHandler(e, order._id)} value={order.status} >
                <option value="Food Processing">Food Processing</option>
                <option value="Out Of Delivery">Out Of Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>

            </div>
          )
        })}


      </div>
    </div>

  )
}

export default Orders