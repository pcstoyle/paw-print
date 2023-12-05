// import '../styles/Header.css';
import Navbar from './Navbar';

function Header( {currentPage, handlePageChange } ) {
  return (
    <header className="header">
      <h1>Welcome to Pawprint</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;