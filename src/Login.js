import React, { useState } from 'react';
import logo from "./assets/Logo1.png"
import "./style/Login.css"
import robot from "./assets/robot.png"
import charm from "./assets/charm1.png"
import Input from './components/Input';
import Button from './components/Button';
import Contact from './components/Contact';
import { database } from './FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
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
    <div className='main'>
      <img src={logo} className='logo'/>
      <img src={charm} className='charm'/>
      <div className='left'>
        <h2>Welcome Back!</h2>
        <div className='inputs'>
          <Input inputName="Email:" inputfunctionName={handleEmailChange}/>
          <Input inputName="Password:" inputfunctionName={handlePasswordChange} type="password"/>
        </div>
        <Button name="Login" functionName={handleSubmit}/>
        <div className='other'>
          <p>Do not have an account? <button className='simple-button'>Register</button></p>
          <Contact/>
        </div>
      </div>
      <div className='right'>
        <img src={robot} className='robot'/>
      </div>
    </div>
  );
};

export default Login;
