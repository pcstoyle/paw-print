import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';
import Signup from './pages/Signup'
import Home from './pages/Home';
import CurrentDogs from './pages/CurrentDogs';
import Reservations from './pages/Reservations';
import Payment from './pages/Payments';
import Login from './pages/Login';
// import DogProfile from './pages/DogProfile';

function App() {
  const [ currentPage, setCurrentPage ] = useState (  );

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'CurrentDogs') {
      return <CurrentDogs />;
    }
    if (currentPage === 'Reservations') {
      return <Reservations />;
    }
    if (currentPage === 'Payment') {
    return <Payment />;
    }
    if (currentPage === 'Login') {
      return <Login />;
      }

    if (currentPage === 'Signup') {
      return <Signup />;
        }
    // if (currentPage === 'DogProfile'){
    //   return <DogProfile/>;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
     <Header currentPage={ currentPage } 
     handlePageChange={handlePageChange}/>
     <main>
      {renderPage ()}
     </main>
      
    </>
  )
}

export default App
