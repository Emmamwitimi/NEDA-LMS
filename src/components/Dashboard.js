import React from 'react';
import './styles/Dashboard.css';
import Html from './Html'; 
import Css from './Css';
import JavaScript from './JavaScript';

const courses = [
  {
    img: './html.jpg',
    name: 'HTML',
    key: 'HTML', 
  },
  {
    img: './css.png',
    name: 'CSS',
    key: 'CSS',  
  },
  {
    img: './js.png',
    name: 'JavaScript',
    key: 'JavaScript', 
  },
];

const Dashboard = ({ selectedCourse, setSelectedCourse }) => {
  return (
    <div className='dashboard'>
      <h1>WELCOME TO NEDA AFRICA IT FACET</h1>

      {/* Conditional rendering based on selectedCourse */}
      {selectedCourse === 'HTML' && <Html />}
      {selectedCourse === 'CSS' && <Css />}
      {selectedCourse === 'JavaScript' && <JavaScript />}
      
      <div className='card-containers'>
        {courses.map((course, index) => (
          <div 
            key={index} 
            className='course-card' 
            onClick={() => setSelectedCourse(course.key)} 
          >
            <img 
              src={course.img} 
              alt={`${course.name} logo`} 
              className='card-img' 
            />
            <h2>{course.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
