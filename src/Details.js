import React, { useEffect, useState } from 'react'
import details from './assets/details1.png'
import Logo from './assets/Logo1.png'
import Footer from './components/Footer'
import './style/Details.css'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from './FirebaseConfig'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [eventDatas, setEventDatas] = useState([]);
  const{name} = useParams();

  const getData = async () => {
    try {
      const valRef = collection(firestore, 'Events');
      const dataDB = await getDocs(valRef);
      const allData = dataDB.docs.map((val) => ({
        ...val.data(),
        id: val.id,
      }));
      const event = allData.find((alldata) => alldata.eventName === name )
      // setEventDatas(allData);
      console.log(event, "EVENTTTTTTTTTTTTTTTTTTTTTTT")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    getData();
  }, [])

  console.log(eventDatas, "eveeenTTTTTTTTssssssssssssssssssssss");

  // const event = eventDatas.find((eventData) => eventData.eventName === name );
  // console.log(event, "EVENTTTTTTTTTTTTTTTTTTTTTT")
  // const {companyName, date, eventName, explanation, img, location, type} = event;
  return (
    <div className='details'>
        <img className='Logo3' src={Logo} />
        {/* <div className='Event-Detail'>
          <img src={img}/>
          <div>
            <h1>{eventName}</h1>
            <p>{explanation}</p>
          </div>
        </div> */}

       <Footer/>
    </div>
  )
}

export default Details
