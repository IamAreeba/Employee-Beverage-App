import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, maiores sequi animi consequatur omnis aperiam molestiae ex, saepe, vitae numquam temporibus consequuntur necessitatibus odio aut nulla. Porro deserunt molestiae iusto!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={ ()=> { setCategory(prev => prev === item.menu_name ? "All": item.menu_name )} } key={index} className="explore-menu-list-item">
                        <img className={category === item.menu_name ? "active": ""} src={item.menu_image} alt="" />
                        <p> {item.menu_name} </p>
                            
                    </div>
                )
            })}
        </div>

        <hr />
    </div>
  )
}

export default ExploreMenu