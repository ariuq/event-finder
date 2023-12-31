import React from 'react'
import logo from '../assets/Logo1.png'
import plus from '../assets/plus.svg'
import login from '../assets/login.svg'
import search from "../assets/search.png"

import '../style/Header.css'

const Header = ({img, classname, name, functionName, addEvent}) => {
  return (
    <div className='header'>
      <img  className='Logo1' src={logo}/>
      <label className='header-input'>
        <input id='search' type='text' placeholder= 'Search events...'/>    
      </label>
       <div className='add' onClick={addEvent}>
        <div className={classname}>
           <img src={plus}/>
           <p>Add Event</p>
        </div>
        <div className='plus' onClick={functionName}>
           <img src={img}/>
           <p>{name}</p>
        </div>    
       </div>
    </div>
  )
}

export default Header
