import React, { useState } from 'react'
import robot from "./assets/register-robot.png"
import logo from "./assets/Logo1.png"
import "./style/Register.css"
import Input from './components/Input'
import Button from './components/Button'
import Contact from './components/Contact'
import { useNavigate } from 'react-router-dom';
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    createUserWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, 'authData')
      history('/events')
    })
  };
  return (
    <div className='register'>
      <img src={robot} className='register-robot'/>
      <img src={logo} className='logo1'/>

      <div className='register-inputs'>
        <h2>Please Fill out form to Register!</h2>
        <div className='inputs'>
        <Input inputName="Full Name:"/>
        <Input inputName="Username:"/>
        <Input inputName="Email:" inputfunctionName={handleEmailChange}/>
        <Input inputName="Password:" inputfunctionName={handlePasswordChange}/>
        <Input inputName="Confirm Password:" />

        </div>
        <Button name="Register" functionName={handleSubmit}/>
        <div className='other'>
            <p>Yes i have an account? <button className='simple-button'>Login</button></p>
            <Contact/>
        </div>
      </div>
    </div>
  )
}

export default Register
