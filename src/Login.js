import React, { useState } from 'react';
import logo from "./assets/Logo1.png"
import "./style/Login.css"
import robot from "./assets/robot.png"
import charm from "./assets/charm1.png"
import Input from './components/Input';
import Button from './components/Button';
import Contact from './components/Contact';
import { useNavigate } from 'react-router-dom';
import { database } from './FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from './AuthContext';

const Login = () => {
  const { isLogin, setLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const data = await signInWithEmailAndPassword(database, email, password);
      console.log(data, 'authData');
      setLogin(true);
      history('/', { state: { isLogin: true } });
    } catch (error) {
      console.error('Error logging in:', error);
    }
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
