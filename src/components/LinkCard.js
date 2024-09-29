import React, { useState } from 'react';

const LinkCard = ({ links, courses, showCourse, handleShowCourse, setSelectedCourse }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function handleDropdowntoggle(link) {
    if (link === 'Courses') {
      setDropdownOpen(!isDropdownOpen);
    }
    else if (link === 'Dashboard'){
      setSelectedCourse("Dashboard");
    }
  }
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className='link-card'>
      <ul>
        {links.map((link, index) => (
          <li key={index} className='link-item' onClick={() => handleDropdowntoggle(link)}>
            {link}
            {link === 'Courses' && (
              <i className={`fa-solid fa-circle-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
            )}
          </li>
        ))}
      </ul>

      {isDropdownOpen && (
        <div className='dropdown'>
          <ul>
            {courses.map((course, courseIndex) => (
              <li key={courseIndex} className='dropdown-item' onClick={() => handleCourseClick(course)}>
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LinkCard;
