import React from 'react';
import logo from "./assets/Logo1.png"
import "./style/Login.css"
import robot from "./assets/robot.png"
import charm from "./assets/charm1.png"
import Input from './components/Input';
import Button from './components/Button';
import Contact from './components/Contact';

const Login = () => {
  return (
    <div className='main'>
    <img src={logo} className='logo'/>
      <img src={charm} className='charm'/>
      <div className='left'>
        <h2>Welcome Back!</h2>
        <div className='inputs'>
        <Input inputName="Username:"/>
        <Input inputName="Password:"/>
        </div>
        <Button name="Login"/>
        <div className='other'>
            <p>Do not have an account? <button className='simple-button'>Register</button></p>
            <Contact/>
        </div>
      </div>
      <div className='right'>
      <img src={robot} className='robot'/>


      </div>
    </div>
  )
}

export default Login
