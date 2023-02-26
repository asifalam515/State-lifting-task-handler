import React, { useState } from 'react';
import './DarkMode.css'

const DarkMode = () => {
    const [theme, setTheme] =useState('light')
    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('dark-mode', newTheme === 'dark');
      }

    return (
        <div className={`container ${theme === 'dark' ? 'dark-mode' : ''}` }>
    <button  onClick={toggleTheme}>Toggle dark mode</button>
  </div>
    );
};


  
export default DarkMode;