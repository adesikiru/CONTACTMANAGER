import React from 'react'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import About from './Pages/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/register',
    element:<Register />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/about',
    element:<About />
  },
])
const App = () => {
  return (

    <RouterProvider router={router}/>
  
  )
}

export default App