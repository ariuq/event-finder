import React from 'react'
import "../style/Button.css"

const Button = ({name}) => {
  return (
    <div className='button-container'>
         <button className='solid-button'>{name}</button>
    </div>
     
  )
}

export default Button
