
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import { useContext, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ThemeContext from '../contexts/ThemeContext';
import {useWindowSize } from '../hooks/CustomHook';
import { useTheme } from '../hooks/useTheme';

 const Home = () => {
    const [serachName, setSearchName]=useState("");
    //const [isDarkMode]=useOutletContext(); // this is gettting values from Outlet in App.jsx
    //const [isDarkMode]=useContext(ThemeContext); // by using this, the value sent from App.jsx 
                                    // is accessible here and all components under Home can also access this value
   
   const [isDarkMode]=useTheme(); // custom hook to use theme
    const windowSize=useWindowSize();
   console.log("window size in Home.jsx:", windowSize);
  return (
    <>
        <main className={`${isDarkMode ? 'dark' : ''}`}>
          <div style={{textAlign:'center'}}>{windowSize.width } X {windowSize.height}</div>
             <div className='search-filter-container'>
                <SearchBar setSearchName={setSearchName}/>
                <SelectMenu setSearchName={setSearchName}></SelectMenu>
            </div>
            <CountriesList serachName={serachName}/>
        </main>
    </>
  )
}

export default Home;
