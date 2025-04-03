import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home' 
import NoteDetail from './pages/NoteDetail'
const Layout = () => {
  return (
   <div>
   <Navbar/>
      <Outlet />
      
    </div>
  )
      
}


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children:[
     {
      path:'/',
      element:<Home/>,
     },
     {
      path:'/Notes',
      element:<NoteDetail/>,
     },
    ]
  }

])


const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App