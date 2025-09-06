import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axiosInstance from "../axios";
export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    // Storing token
    const [token, setToken] = useState("")


    const url = "http://localhost:5000"


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

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])


    // The token wasnt storing in the state thats why getting the SignIn btn on reload so saved in state
    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    }, [])


    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        axiosInstance, url, token, setToken
    }

    return (
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider 