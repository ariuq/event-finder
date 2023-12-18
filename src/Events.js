import React, { useEffect, useState } from 'react'
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
import { database, firestore } from './FirebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './style/Events.css'
import { useLocation } from 'react-router-dom'
import login from './assets/login.svg'
import Logout from './assets/Logout.png'
import { useAuth } from './AuthContext';
import { collection, getDocs } from 'firebase/firestore'
import EventList from './EventList'

const Events = () => {
  const history = useNavigate();
  const { isLogin, setLogin } = useAuth();
  const [data, setData] = useState([]);
  const logOut = () => {
    setLogin(false)
    history('/')
    
  };
  const logIn = () => {
    history('/login');
    console.log('loginnedd')
}
const addEvent = () => {
  history("/add-event");
}

const getData = async() => {
  const valRef = collection(firestore, 'Events')
  const dataDB = await getDocs(valRef)
  const allData = dataDB.docs.map(val => ({
    ...val.data(), id:val.id
  }))
  setData(allData);
}

useEffect(() => {
  getData();
}, [])
  return (
    <div>   
      <Header name={isLogin ? 'Logout' : 'Login'} functionName={isLogin? logOut: logIn} img={isLogin? Logout : login} classname={isLogin? 'add-icon':'hide' } addEvent={isLogin? addEvent:null}/>
      <img src={poster } width='100%' height='100%'/>
      <EventList eventData={data} eventType="Education"/>
      <EventList eventData={data} eventType="Art"/>
      <EventList eventData={data} eventType="Volunteer"/>
      <EventList eventData={data} eventType="Show"/>
      <EventList eventData={data} eventType="Business"/>
      <EventList eventData={data} eventType="Technology"/>
      <EventList eventData={data} eventType="Sport"/>

      <Footer/>
    </div>
  )
}

export default Events
