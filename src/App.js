import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Details';
import Login from './Login';
import Register from './Register';
import Add from './Add';
import Events from './Events'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/add-event' element = {<Add/>}/>
          <Route path='/events' element = {<Events/>}/>
          <Route path='/event-detail' element = {<Details/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
