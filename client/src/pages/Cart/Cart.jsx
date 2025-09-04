import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartItems, food_list, addToCart, removeFromCart, getTotalCartAmount } = useContext(StoreContext)


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

              <>

                <div className='cart-item-title cart-items-item' >

                  {/* <p>{item.name}</p> */}
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p> ₨ {item.price} </p>
                  <p> {cartItems[item._id]} </p>  {/* This will give quantity of the product */}
                  <p> ₨ {item.price * cartItems[item._id]} </p>           {/* Here we * quantity with price */}



                  <select>
                    <option>No sugar</option>
                    <option>Less sugar</option>
                    <option>Normal</option>
                    <option>Extra sugar</option>
                  </select>

                  <select>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>

                  <input type="time" />

                  {/* <input type="text" placeholder="Comments" /> */}
                  <textarea></textarea>

                  {/* <input type="checkbox" /> */}
                  <p className='cross' onClick={() => removeFromCart(item._id)} > X </p>

                </div>

                <hr />

              </>





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
            <div className="cart-total-details"> <p> Delivery Fee </p> <p> ₨ {2} </p> </div>
            <hr />
            <div className="cart-total-details"> <b> Total </b> <b> ₨ {getTotalCartAmount() + 2} </b> </div>

          </div>

          <button> PROCEED TO CHECKOUT </button>
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