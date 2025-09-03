import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Menu from './pages/Menu/Menu'

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
      

        <Routes>
          <Route path='/' element={ <Home /> }  />
          <Route  path='/menu' element={ <Menu /> } />
          <Route path='/cart' element={ <Cart /> }  />
          <Route path='/order' element={ <PlaceOrder /> }  />
        </Routes>

      </div>
    </> 
  )
}

export default App 