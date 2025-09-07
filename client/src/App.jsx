import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Menu from './pages/Menu/Menu'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginSignUp from './components/Login/LoginSignUp'
import MyOrder from './pages/MyOrders/MyOrder'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginSignUp setShowLogin={setShowLogin} /> : <> </> }

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='myorders' element={ <MyOrder /> } />
        </Routes>

        <AppDownload  />

      </div>
      <Footer />
    </>
  )
}

export default App 