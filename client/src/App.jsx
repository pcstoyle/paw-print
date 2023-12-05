import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Header from './components/Header';

import Home from './pages/Home';
import CurrentDogs from './pages/CurrentDogs';
import Reservations from './pages/Reservations';

function App() {
  const [ currentPage, setCurrentPage ] = useState ('Home');

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
