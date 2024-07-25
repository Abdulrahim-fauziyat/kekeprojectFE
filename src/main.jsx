import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Signup from './components/Signup.jsx'
import Login from './components/auth/Login.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'




const router = createBrowserRouter([
  { path:'/',  element:<App/>,},
  { path:'/signup',  element:<Signup/>, },
  {path:'/login', element:<Login/>,},
  {path:'/dashboard', element:<Dashboard/>,},
  
  

 

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
