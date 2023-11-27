import React from 'react'
import logo from '../assets/Logo1.png'
import search from '../assets/magnifying-glass-solid.svg'
import plus from '../assets/plus.svg'
import login from '../assets/login.svg'

import '../style/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img  className='Logo1' src={logo}/>
      <div>
      
        <input id='search' type='text' placeholder= 'Search events...'>    
        </input>
      </div>
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
