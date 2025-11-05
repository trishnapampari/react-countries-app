import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import CountryDetails from './components/CountryDetails.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement:<Error/>,
  children :[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/:countryDetails',
      element:<CountryDetails/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)
