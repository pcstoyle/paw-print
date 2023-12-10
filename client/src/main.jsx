import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import CurrentDogs from './pages/CurrentDogs.jsx'
import AddDog from './pages/AddDog.jsx'
import AddOwner from './pages/AddOwner.jsx'
import DogProfile from './pages/DogProfile.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Login />
      },{
        path: '/home',
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },     
      {
        path: '/currentdogs',
        element: <CurrentDogs />
      },
      {
        path: '/addDog',
        element: <AddDog />
      },{
        path: '/addOwner',
        element: <AddOwner/>
      },{
        path: '/profile',
        element: <DogProfile/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
