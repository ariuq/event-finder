import React from 'react'
import Logo from '../assets/Logo1.png'
import Ig from '../assets/ig.png'
import Fb from '../assets/fb.png'
import In from '../assets/in.png'

import '../style/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <img className='Logo2' src={Logo}/>


        <article className='Connect'>
            <p>Connect with us</p>
            <div className='link'>
                <img src={Ig} />
                <img src={Fb} />
                <img src={In} />
            </div>
        </article>
        
        
      
    </div>
  )
}

export default Footer
