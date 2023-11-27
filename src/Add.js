import React, {useState} from 'react'
import robot from "./assets/add-robot.png"
import logo from "./assets/Logo1.png"
import upload from "./assets/upload-icon.png"
import calendar from "./assets/calendar-icon.png"
import "./style/Register.css"
import Input from './components/Input'
import Button from './components/Button'
import Contact from './components/Contact'

const Add = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
    return (
        <div className='register'>
          <img src={robot} className='register-robot'/>
          <img src={logo} className='logo1'/>
    
          <div className='register-inputs'>
            <h2>Please Fill out form to Add Event!</h2>
            <div className='inputs'>
            <Input inputName="Event Name::"/>
            <Input inputName="Location:"/>
            <Input inputName="Company Name:"/>
            <Input inputName="Explanation:"/>
            <div className='small-inputs'>
                <div className='small-input'>
                    <label for="date">
                    Start Date:</label>
                    
                    <input type='date' name='date' id='date' />
                </div>
                <div className='small-input'>
                    <label for="file">
                    Event Poster:</label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                     <label htmlFor="fileInput" className="custom-file-input">
                        <img src={upload}/>
                    </label>
                    {selectedFile && (
                        <div className="file-label">
                            Selected File: {selectedFile.name}
                        </div>
                    )}
                </div>
                
            </div>
    
            </div>
            <Button name="Add Event"/>
            <div className='other'>
                <p>Yes i have an account? <button className='simple-button'>Login</button></p>
                <Contact/>
            </div>
          </div>
        </div>
      )
}

export default Add
