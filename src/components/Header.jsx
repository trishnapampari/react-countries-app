import React, { useState } from 'react'
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';

 const Header = () => {
  //const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  // const [isDarkMode,setIsDarkMode]=useContext(ThemeContext); // method1

   const [isDarkMode,setIsDarkMode]=useTheme(); // method2 - using custom hook


  // we cant modify the dom directly  - so we use css class to change the mode(check App.css)
  // if(isDarkMode){
  //   document.body.classList.add('dark');
  // }else{
  //   document.body.classList.remove('dark');
  // }


  return (
    <header className={`header-container ${isDarkMode ? 'dark' :''}`}>
        <div className='header-content'>
            <h2 className='title'>heelo world</h2>
            <p className='theme-changer' onClick={()=>{
              // document.body.classList.toggle('dark')
              setIsDarkMode(!isDarkMode);
              localStorage.setItem('isDarkMode', !isDarkMode);
            }}>
                <i className={`fa-solid fa-${isDarkMode? 'sun':'moon'}`}></i>
                {isDarkMode?'Light Mode': 'Dark Mode'}
            </p>
        </div>

    </header>
  )
}

export default Header;
