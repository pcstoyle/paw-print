// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';
// import Auth from '../../utils/auth';

function Navbar( {currentPage, handlePageChange} ) {
  return (
    <nav className=" navBar">
      <ul className="flex space-x-4 justify-center dark:text-white nav nav-tabs">
      <li className="dark:text-white nav-item">
       <Link to="/">
        Home
       </Link>
      </li>
      <li className="dark:text-white nav-item">
       <Link to="/login">
        Login
       </Link>
      </li>
      <li className="dark:text-white nav-item">
      <Link to="/signup">
        Signup
       </Link>
       </li>
    
    </ul>
    </nav>
  );
}

export default Navbar;