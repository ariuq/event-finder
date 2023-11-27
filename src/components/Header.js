import React from 'react'
import logo from '../assets/Logo1.png'
import plus from '../assets/plus.svg'
import login from '../assets/login.svg'
import search from "../assets/search.png"

import '../style/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img  className='Logo1' src={logo}/>
      <label className='header-input'>
        <input id='search' type='text' placeholder= 'Search events...'/>    
      </label>
       <div className='add'>
        <div className='plus'>
           <img src={plus}/>
           <p>Add Event</p>
        </div>
        <div className='plus'>
           <img src={login}/>
           <p>Login</p>
        </div>    
       </div>
    </div>
  )
}

export default Header
