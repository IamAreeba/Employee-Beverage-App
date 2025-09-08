import React, { useState, useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axiosInstance from '../../axios'

const FoodItem = ({ id, name, description, image, price }) => {

    // const [itemCount, setItemCount] = useState(0)
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

    return (
        <div>
            <div className="food-item">

                <div className="food-item-img-container">
                    <img className="food-item-image" src={`/images/${image}`} alt="" />

                    {/* We check if the fooditem count=0 we provide btn if count>0 we provide 1 counter */}

                    {
                        !cartItems[id]
                            ? <img
                                className='add'
                                // onClick={() => setItemCount(prev => prev + 1)}
                                onClick={() => addToCart(id)}
                                src={assets.add_icon_white}
                                alt=""
                            />

                            : <div className="food-item-counter">
                                <img
                                    // onClick={() => { setItemCount(prev => prev - 1) }}
                                    onClick={() => removeFromCart(id)}
                                    src={assets.remove_icon_red}
                                    alt=""
                                />

                                <p>{cartItems[id]}</p>

                                <img
                                    // onClick={() => { setItemCount(prev => prev + 1) }}
                                    onClick={() => addToCart(id)}
                                    src={assets.add_icon_green}
                                    alt=""
                                />

                            </div>
                    }


                </div>

                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p> {name} </p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                </div>

                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₨ {price}</p>

            </div>
        </div>
    )
}

export default FoodItem 