import React from 'react'
import '../style/Card.css'

const Card = ({image, name, address, month, day}) => {
  return (
    <div className='cart'>
      <img src={image}/>
      <div className='comment'>
        <span className='loc'>
        <h2>{name}</h2>
        <p>{address}</p>
        </span> 
       
        <span className='date'>
            <span>{month}</span>
            <br></br>
            <span>{day}</span>
        </span>
        
      </div>
    </div>
  )
}

export default Card
