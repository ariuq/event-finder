import React from 'react'
import "../style/Input.css"

const Input = ({inputName}) => {
  return (
    <div className='inputs'>
      <span>{inputName}</span>
      <input type='text'/>
    </div>
  )
}

export default Input
