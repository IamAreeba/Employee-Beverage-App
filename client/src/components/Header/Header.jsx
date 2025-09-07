
import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate()
  return (
    <div className='header' >
        <div className="header-contents">
            <h2> Order your Beverages from here </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae exercitationem porro ut quod asperiores ullam reprehenderit et delectus. Unde cupiditate ad architecto corporis minus, tenetur et quis delectus laborum. </p>
            <button onClick={() => navigate('/menu')} > View Menu </button>
        </div>
        
    </div>
  )
}

export default Header