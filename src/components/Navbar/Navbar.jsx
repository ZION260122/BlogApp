import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { Link } from 'react-router-dom'
import About from '../about/About'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme === 'light'? setTheme("dark") : setTheme("light");
    }

  return (
   <div>
     <div className='navbar'>
        <img src={theme === 'light'? logo_light: logo_dark} alt="" className='logo' />
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li>Features</li>
            <li><Link to="./about">About</Link></li>
        </ul>

        <div className='search-box'>
        <button>Write Your Own Blog</button>
        </div>

        <img onClick={()=>{toggle_mode()}} src={theme === 'light'? toggle_light : toggle_dark} alt="" className='toggle-icon' />
            
    </div>
    <div className="space"></div>
   </div>
    
  )
}

export default Navbar
