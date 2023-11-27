import React from 'react'
import call from "../assets/call.png"
import facebook from "../assets/facebook-solid.png"
import email from "../assets/email.png"
import "../style/Contact.css"

const Contact = () => {
  return (
    <div className='contact-icons'>
      <img src={facebook}/>
      <img src={call}/>
      <img src={email}/>

    </div>
  )
}

export default Contact
