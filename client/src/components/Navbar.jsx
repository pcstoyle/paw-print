// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';
// import Auth from '../../utils/auth';

function Navbar( {currentPage, handlePageChange} ) {
  return (
    <nav className="navBar">
      <ul class="flex space-x-4 justify-center dark:text-white" className="nav nav-tabs">
      <li class="dark:text-white" className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#currentDogs"
          onClick={() => handlePageChange('CurrentDogs')}
          className={currentPage === 'CurrentDogs' ? 'nav-link active' : 'nav-link'}
        >
          Current Dogs
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#reservations"
          onClick={() => handlePageChange('Reservations')}
          className={currentPage === 'Reservations' ? 'nav-link active' : 'nav-link'}
        >
          Reservations
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#payment"
          onClick={() => handlePageChange('Payment')}
          className={currentPage === 'Payment' ? 'nav-link active' : 'nav-link'}
        >
          Payment
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li class="dark:text-white" className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('Signup')}
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default Navbar;