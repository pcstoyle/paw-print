// import '../styles/Header.css';
import Navbar from './Navbar';
import Logo from '../images/PawprintLogo.png'

function Header( {currentPage, handlePageChange } ) {
  return (
    <header>
      <div class="flex justify-center items-center">
        <img class="w-1/3" src={Logo} alt="logo" />
      </div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

export default Header;