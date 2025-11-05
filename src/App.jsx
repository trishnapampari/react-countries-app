import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

 const App = () => {
  return (
    <ThemeProvider>
        <Header />
        <Outlet />
        {/* <Outlet context={[isDarkMode, setIsDarkMode]}/> - for using useContext */}
    </ThemeProvider>
  )
}

export default App;
