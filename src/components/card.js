import React from 'react'

const Card = ({image, name, address, month, day}) => {
  return (
    <div>
      <img src={image}/>
      <div>
        <h2>{name}</h2>
        <p>{address}</p>
        <div>
            <h2>{month}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card
