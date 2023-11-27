import React from 'react'
import "../style/Input.css"

const Input = ({inputName}) => {
  return (
    <div className='inputs'>
      <label for={inputName}>{inputName}</label>
      <input className='big-input' type='text' name={inputName} id={inputName}/>
    </div>
  )
}

export default Input
