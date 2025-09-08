import { createContext, useContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axiosInstance from "../axios";
export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    // Storing token
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])



    const url = "http://localhost:5000"


    const addToCart = async (itemId) => {
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

        // The token means user is loggedin
        // From this token we can exactly atach cart data to specific use by fetching its Id
        if (token) {
            await axiosInstance.post("/api/cart/add", { itemId }, { headers: { Authorization: `Bearer ${token}` } })
        }
    }


    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }))

        if (token) {
            await axiosInstance.post("/api/cart/remove", { itemId }, { headers: { Authorization: `Bearer ${token}` } })
        }
    }


    // Here we calculate the total on cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item]
                }
                else{
                    // console.log("Error")
                }
            }
        }
        return totalAmount

    }


    // Load cart data
    const loadCartData = async (token) => {
        const response = await axiosInstance.post("/api/cart/get", {}, { headers: { Authorization: `Bearer ${token}` } })

        // Above we will get the response which we will show in cartData
        setCartItems(response.data.cartData)
    }







    // Fetching Food List from DB
    const fetchFoodList = async () => {
        const response = await axiosInstance.get('/api/food/list')
        setFoodList(response.data.data)
    }

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])


    // The token wasnt storing in the state thats why getting the SignIn btn on reload so saved in state
    useEffect(() => {

        async function loadData() {
            await fetchFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }



        loadData()
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