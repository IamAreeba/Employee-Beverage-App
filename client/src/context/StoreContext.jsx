import { createContext, useContext, useState } from "react";
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

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider 