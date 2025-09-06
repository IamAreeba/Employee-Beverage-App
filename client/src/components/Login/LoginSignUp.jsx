import React, { useContext, useEffect, useState } from 'react'
import './LoginSignUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axiosInstance from '../../axios'
import axios from 'axios'


const LoginSignUp = ({ setShowLogin }) => {

  const {axiosInstance, url, token, setToken } = useContext(StoreContext)
  const [currState, setCurrState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({
      ...data,
      [name]: value
    }))
  }


  const onLogin = async (e) => {
    e.preventDefault()
    // Decide endpoint based on state
    const endpoint = currState === "Login" 
      ? "/api/user/login" 
      : "/api/user/register";

    // Send POST request with data
    const response = await axiosInstance.post(endpoint, data);
    // console.log(response.data)

    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }


  }

  useEffect(() => {
    console.log(data)

  }, [data])


  return (

    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currState} </h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">

          {currState === 'Login'
            ? <> </>
            : <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder='Your Name'
              required
            />}

          {/* <input type="text" placeholder='Your Name' required /> */}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder='Password'
            required
          />
        </div>

        <button> {currState === 'Sign Up' ? "Create account" : 'Login'} </button>

        <div className="login-popup-condition">
          <input 
            type="checkbox" 
            required 
          />

          <p> By continuing i agree to the terms of use & privacy policy </p>
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href={"http://localhost:5173"}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-link"
          >
            Go to Admin Portal
          </a>
        </div>

        {currState === 'Login'
          ? <p> Create a new Account ? <span onClick={() => setCurrState("Sign Up")} > Click Here </span> </p>
          : <p> Already Have an account? <span onClick={() => setCurrState("Login")} > Login Here </span> </p>
        }

      </form>

    </div >
  )
}

export default LoginSignUp