import React, { useState } from 'react';
import LinkCard from './LinkCard';
import "./styles/LeftNav.css";

const LeftNav = ({ selectedCourse, setSelectedCourse }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let links = ['Dashboard', 'Courses'];
  let courses = ['HTML', 'CSS', 'JavaScript'];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Hamburger button for small screens */}
      <button className="hamburger" onClick={toggleNav}>
      <i className="fa fa-bars" style={{ color: 'white' }}></i>
      </button>
      
      <aside className={`left-nav ${isNavOpen ? 'open' : ''}`}>
        <LinkCard 
          links={links} 
          courses={courses} 
          selectedCourse={selectedCourse} 
          setSelectedCourse={setSelectedCourse}
        />
      </aside>
    </>
  );
};

export default LeftNav;
