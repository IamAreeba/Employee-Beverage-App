import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        // 1st checking if the user is adding the product first time in cart
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1
            }))
        }

        else {
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }))
    }


    // Here we calculate the total on cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount

    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider 