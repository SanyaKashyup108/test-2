import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import NoteList from './Pages/NoteList'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

    </div>
  )

}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Notes',
        element: <NoteList />,
      },
    ]
  }

])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App