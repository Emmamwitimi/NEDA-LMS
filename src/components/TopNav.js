import React, { useState, useEffect } from 'react';
import './styles/TopNav.css';

const TopNav = () => {
  const [darkTheme, setDarkTheme] = useState(() => {
    // Retrieve theme preference from localStorage, default to false (light theme)
    const savedTheme = localStorage.getItem('darkTheme');
    return savedTheme === 'true'; // Convert string to boolean
  });

  useEffect(() => {
    // Apply dark or light mode by adding/removing the class from the body
    if (darkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save the theme preference in local storage
    localStorage.setItem('darkTheme', darkTheme);
  }, [darkTheme]);

  // Function to toggle dark mode
  const handleClick = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className='main'>
      <img src='/NEDA.png' alt='logo' className='logo' />
      <h1>SOFTWARE ENGINEERING</h1>
      <div className='icons'>
        {/* Toggle Icon: Change the icon based on the theme */}
        
        <i className={darkTheme ? 'fa-solid fa-toggle-on' : 'fa-solid fa-toggle-off'} onClick={handleClick} ></i>
        
        <i className='fa-solid fa-user'></i>
      </div>
    </div>
  );
};

export default TopNav;
