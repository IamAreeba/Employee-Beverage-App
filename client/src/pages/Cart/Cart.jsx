import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  const navigate = useNavigate()


  const [customizations, setCustomizations] = useState({});

  const onCustomizationChange = (itemId, e) => {
    const { name, value } = e.target;   // name = sugar, cupSize, etc.
    setCustomizations(prev => {
      const updated = {
        ...prev,
        [itemId]: {
          ...prev[itemId],   // keep previous values
          [name]: value      // update the specific field
        }
      };
      console.log("Updated customizations:", updated);
      return updated;
    });
  };




  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          {/* <p> Dummy Text </p>
          <p> Dummy Text </p>
          <p> Dummy Text </p>
          <p> Dummy Text </p> */}

          <p> Items </p>
          <p> Title </p>
          <p> Price </p>
          <p> Quantity </p>
          <p> Total </p>

          <p>Sugar</p>
          <p>Cup Size</p>
          <p>Delivery Time</p>
          <p>Comments</p>
          <p> Remove </p>
          {/* <p>Repeat</p> */}

        </div>

        <br />
        <hr />

        {/* looping in food list */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (



              <div key={item._id} >


                <div key={item._id} className='cart-item-title cart-items-item' >

                  {/* <p>{item.name}</p> */}
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p> ₨ {item.price} </p>
                  <p> {cartItems[item._id]} </p>                     {/* This will give quantity of the product */}
                  <p> ₨ {item.price * cartItems[item._id]} </p>      {/* Here we * quantity with price */}



                  <select
                    name="sugar"
                    value={customizations[item._id]?.sugar || ""}
                    onChange={(e) => onCustomizationChange(item._id, e)}
                  >
                    <option value="">Select sugar</option>
                    <option value="No sugar">No sugar</option>
                    <option value="Less sugar">Less sugar</option>
                    <option value="Normal">Normal</option>
                    <option value="Extra sugar">Extra sugar</option>
                  </select>

                  <select
                    name="cupSize"
                    value={customizations[item._id]?.cupSize || ""}
                    onChange={(e) => onCustomizationChange(item._id, e)}
                  >
                    <option value="">Select size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>

                  <input
                    type="time"
                    name="deliveryTime"
                    value={customizations[item._id]?.deliveryTime || ""}
                    onChange={(e) => onCustomizationChange(item._id, e)}
                  />

                  <textarea
                    name="comments"
                    value={customizations[item._id]?.comments || ""}
                    onChange={(e) => onCustomizationChange(item._id, e)}
                  ></textarea>



                  {/* <input type="checkbox" /> */}
                  <p className='cross' onClick={() => removeFromCart(item._id)} > X </p>

                </div>

                <hr />
              </div>





            )
          }
        })}

      </div>

      <div className="cart-bottom">

        {/* Cart Total */}
        <div className="cart-total">
          <h2> Cart Totals </h2>
          <div>

            <div className="cart-total-details"> <p> Subtotal </p> <p> ₨ {getTotalCartAmount()}  </p> </div>
            <hr />
            <div className="cart-total-details"> <p> Service Fee </p> <p> ₨ {getTotalCartAmount() === 0 ? 0 : 2} </p> </div>
            <hr />
            <div className="cart-total-details"> <b> Total </b> <b> ₨ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} </b> </div>

          </div>

          <button onClick={() => navigate('/order', { state: { customizations } })}>
            PROCEED TO CHECKOUT
          </button>


        </div>

        {/* Promo Code Work */}
        {/* <div className="cart-promocode">
          <div>
            <p> If u have a promo code, Enter it here  </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button> Submit </button>
            </div>

          </div>
        </div> */}

      </div>

    </div>
  )
}

export default Cart