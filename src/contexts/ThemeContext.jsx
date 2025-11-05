import React, { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export default ThemeContext;


export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

    return(
        <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
            {children}
        </ThemeContext.Provider>        
    )

}