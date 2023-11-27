import React from 'react'
import robot from "./assets/register-robot.png"
import logo from "./assets/Logo1.png"
import "./style/Register.css"
import Input from './components/Input'
import Button from './components/Button'
import Contact from './components/Contact'

const Register = () => {
  return (
    <div className='register'>
      <img src={robot} className='register-robot'/>
      <img src={logo} className='logo1'/>

      <div className='register-inputs'>
        <h2>Please Fill out form to Register!</h2>
        <div className='inputs'>
        <Input inputName="Full Name:"/>
        <Input inputName="Username:"/>
        <Input inputName="Email:"/>
        <Input inputName="Password:"/>
        <Input inputName="Confirm Password:"/>

        </div>
        <Button name="Register"/>
        <div className='other'>
            <p>Yes i have an account? <button className='simple-button'>Login</button></p>
            <Contact/>
        </div>
      </div>
    </div>
  )
}

export default Register
