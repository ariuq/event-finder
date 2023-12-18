import React from 'react'
import details from './assets/details1.png'
import Logo from './assets/Logo1.png'
import Footer from './components/Footer'

import './style/Details.css'

const Details = () => {
  // const { name, image, address, month, day, description } = event;
  return (
    <div className='details'>
        <img src={details} width='50%' />
        <img className='Logo3' src={Logo} />
        <div className='Event-Detail'>
        <h1>Virginia Hiring Event</h1>
        <p>
        Join us at Accurate Personnel's Hiring Event! 
        Looking for an exciting career opportunity? Look no further! Accurate Personnel is hosting a spectacular Hiring Event at 7119 Staples Mill Rd in VA. Mark your calendars for Friday, July 21st from 11 am to 1 pm and get ready to take the next step towards a rewarding future. 
        Discover Your Perfect Fit:
        Are you a Warehouse Worker, Order Selector, Janitorial Associate, or Maintenance Worker searching for your dream job? We've got you covered! Accurate Personnel is actively hiring for these positions and many more. Whether you're an experienced professional or just starting your career, we have opportunities for all skill levels. Competitive Pay and Flexibility:
        We believe in recognizing hard work, which is why our positions offer competitive hourly rates of up to $20 per hour. Plus, we have various shifts available, ensuring we can accommodate your schedule and work-life balance needs. At Accurate Personnel, we value our employees and strive to create an environment where everyone can thrive.
        Free Snacks and More:
        Hungry for success? We've got you covered! Join us at our Hiring Event and enjoy snacks on us. Take a break from job hunting and refuel with some delicious snacks while mingling with our friendly team. We're excited to meet you, share our company culture, and answer any questions you may have.
        Event Details: 
        Location: 
        7119 Staples Mill Rd, VA
        Date and Time: Friday, July 21st, 11 am to 1 pm Don't miss this incredible opportunity to kick-start your career with Accurate Personnel.
        </p>
        <div className='order-button'>
        <button>Order</button>
      

        </div>
        <Footer/>
        </div>
        
        

      
    </div>
  )
}

export default Details
