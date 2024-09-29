import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import TopNav from './components/TopNav'
import LeftNav from './components/LeftNav';
import Html from './components/Html';
import Dashboard from './components/Dashboard';
import Css from  './components/Css';
import JavaScript  from './components/JavaScript';


const App = () => {
  //const [showCourse,setShowCourse] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('Dashboard');

  return (
    <div className='app-layout'>
      <TopNav/>
      <div className='main-layout'>
        <LeftNav selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse}/>
        <div className='content-area'>
          {/* Conditionally render the selected course component */}
          {selectedCourse === 'Dashboard' && <Dashboard selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />}
          {selectedCourse === 'HTML' && <Html />}
          {selectedCourse === 'CSS' && <Css />}
          {selectedCourse === 'JavaScript' && <JavaScript />}
        </div>
      </div>
      
    </div>
  )
}

export default App
