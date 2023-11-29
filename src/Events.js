import React from 'react'
import Header from './components/Header'
import poster from './assets/poster.png'
import Card from './components/Card'
import event1 from './assets/event1.png'
import event2 from './assets/event2.png'
import event3 from './assets/event3.png'
import event4 from './assets/event4.png'
import event5 from './assets/event5.png'
import event6 from './assets/event6.png'
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
        <Card name='Virginia Hiring Event' image={event2} address='Shangri-La' month='OCT' day='19'/>
        <Card name='Virginia Hiring Event' image={event3} address='Shangri-La' month='OCT' day='19'/>
      </div>
      <h1>Education:</h1>
      <div className='Carts2'>
        <Card name='Virginia Hiring Event' image={event4} address='Shangri-La' month='OCT' day='19'/>
        <Card name='Virginia Hiring Event' image={event5} address='Shangri-La' month='OCT' day='19'/>
        <Card name='Virginia Hiring Event' image={event6} address='Shangri-La' month='OCT' day='19'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Events
