// import '../styles/Header.css';
import Navbar from './Navbar';
import Logo from '../images/PawprintLogo.png'

function Header( ) {
  return (
    <header>
      <div className="flex justify-center items-center">
        <img className="w-1/3" src={Logo} alt="logo" />
      </div>
      <Navbar/>
    </header>
  );
}

export default Header;