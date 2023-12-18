import React, {useState} from 'react'
import robot from "./assets/add-robot.png"
import logo from "./assets/Logo1.png"
import upload from "./assets/upload-icon.png"
import calendar from "./assets/calendar-icon.png"
import "./style/Register.css"
import Input from './components/Input'
import Button from './components/Button'
import Contact from './components/Contact'
import { firestore, storage } from './FirebaseConfig'
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedImg, setSelectedImg] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [explanation, setExplanation] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('Select Type');
    const history = useNavigate();
    const [buttonDisable, setButtonDisable] = useState(true);

    const handleFileChange = async (event) => {
      setSelectedFile('Loading');
        const file = event.target.files[0];
        const imgs = ref(storage, `Imgs/${v4()}`);
        
        try {
          const [uploadResult] = await Promise.all([
            uploadBytes(imgs, file),
          ]);
      
          const downloadURL = await getDownloadURL(uploadResult.ref);
          setSelectedImg(downloadURL);
          setSelectedFile(file);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      const addEvent = async () => {
        const valRef = collection(firestore, "Events");
      
        if (name === '' || companyName === '' || location === '' || explanation === '' || date === '' || type === 'Select type' || selectedFile == 'Loading') {
          alert("Бүх талбарыг гүйцэт бөглөнө үү");
        } else {
          try {
            await addDoc(valRef, {
              eventName: name,
              companyName: companyName,
              location: location,
              explanation: explanation,
              date: date,
              type: type,
              img: selectedImg,
            });
      
            history("/");
          } catch (error) {
            console.error('Error adding event:', error);
            // Handle the error appropriately, e.g., show an error message
          }
        }
      };
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleType = (e) => {
        setType(e.target.value);
    }
    const handleExplanation = (e) => {
        setExplanation(e.target.value);
    }
    return (
        <div className='register'>
          <img src={robot} className='register-robot'/>
          <img src={logo} className='logo1'/>
    
          <div className='register-inputs'>
            <h2>Please Fill out form to Add Event!</h2>
            <div className='inputs'>
            <Input inputName="Event Name:" inputfunctionName={handleName}/>
            <Input inputName="Location:" inputfunctionName={handleLocation}/>
            <Input inputName="Company Name:" inputfunctionName={handleCompanyName}/>
            <Input inputName="Explanation:" inputfunctionName={handleExplanation}/>
            <div className='small-inputs'>
                <div className='small-input'>
                    <label for="date">
                    Start Date:</label>
                    <input type='date' name='date' id='date' onChange={handleDate}/>
                </div>
                <div className='small-input'>
                <label for="select">
                    Select Type:</label>
                <select className='custom-select-input' onChange={handleType}>
                    <option value="someOption">Select type</option>
                    <option value="Education">Education</option>
                    <option value="Art">Art</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Show">Show</option>
                    <option value="Business">Business</option>
                    <option value="Technology">Technology</option>
                    <option value="Sport">Sport</option>
                 </select>
                </div>
                <div className='small-input'>
                    <label for="file">
                    Event Poster:</label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={(e) => handleFileChange(e)}
                        style={{ display: 'none' }}
                    />
                     <label htmlFor="fileInput" className="custom-file-input">
                        <img src={upload}/>
                    </label>
                    {selectedFile && (
                        selectedFile=='Loading' ? (
                          <div className="file-label">
                            Selected File: Loading...
                        </div>
                        ) : (
                          <div className="file-label">
                            Selected File: {selectedFile.name}
                        </div>
                        )
                    )}
                </div>
                
            </div>
    
            </div>
            <Button name="Add Event" functionName={addEvent} disable={buttonDisable? true:false} />
            <div className='other'>
                <Contact/>
            </div>
          </div>
        </div>
      )
}

export default Add
