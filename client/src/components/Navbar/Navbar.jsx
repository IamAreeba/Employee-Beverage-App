import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axiosInstance from '../../axios'
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home")

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    
    const navigate = useNavigate()
    const logout = async () => {
        const response = await axiosInstance.get("/api/user/logout");
        if (response.data.success) {
            localStorage.removeItem("token")
            setToken("")
        }
        navigate("/")

    }



    return (
        <div className='navbar'>

            {/* Here attaching the Home route to logo also */}
            <Link to='/' > <img src={assets.logo} alt="" className='logo' /> </Link>

            <ul className="navbar-menu">
                <Link to='/' onClick={() => { setMenu("home") }} className={menu === 'home' ? 'active' : ''}>Home</Link>
                <Link to='/menu' onClick={() => { setMenu("menu") }} className={menu === 'menu' ? 'active' : ''}>Menu</Link>
                {/* <a href='#app-download' onClick={() => { setMenu("mobile") }} className={menu === 'mobile' ? 'active' : ''}>Mobile-App</a> */}
                {/* <a href='#footer' onClick={() => { setMenu("contact") }} className={menu === 'contact' ? 'active' : ''}>Contact Us</a> */}
            </ul>

            <div className="navbar-right">
                {/* <img src={assets.search_icon} alt="" /> */}

                <div className="navbar-search-icon">

                    {/* Now here for i am attaching the route on this img */}
                    <Link to='/cart' > <img src={assets.basket_icon} alt="" /> </Link>

                    {/* <div className="dot"></div> */}
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"} ></div>
                </div>


                {/* Showing profile icon */}
                {
                    !token
                        ? <button onClick={() => setShowLogin(true)} >  Sign In </button>
                        : <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt="" />
                            
                            <ul className="nav-profile-dropdown">
                                <li onClick={() => navigate('/myorders')} >
                                    <img src={assets.bag_icon} alt="" />
                                    <p> Orders </p>
                                </li>
                                <hr />
                                <li onClick={logout} >
                                    <img src={assets.logout_icon} alt="" />
                                    <p> Logout </p>
                                </li>
                            </ul>
                        </div>


                }


            </div>

        </div>
    )
}

export default Navbar 