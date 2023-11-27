import React from 'react'
import Header from './components/Header'
import poster from './assets/poster.png'
import Card from './components/Card'
import event1 from './assets/event1.png'
import Footer from './components/Footer'
import './style/Events.css'
const Events = () => {
  return (
    <div>   
      <Header/>
      <img src={poster } width='100%' height='100%'/>
      <h1>Education:</h1>
      <div className='Carts1'>
        <Card name='Virginia Hiring Event' image={event1} address='Shangri-La' month='OCT' day='19'/>
        
        <Card name='Virginia Hiring Event' image={event1} address='Shangri-La' month='OCT' day='19'/>
        
        <Card name='Virginia Hiring Event' image={event1} address='Shangri-La' month='OCT' day='19'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Events
