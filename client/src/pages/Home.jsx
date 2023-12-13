
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div>
    <div className=''>
      <Link to="/addOwner">
        <button className='mx-3'>Add an Owner</button>
      </Link>
      <Link to="/addDog">
        <button>Add a Dog</button>
      </Link>
      </div>
    </div>
  );
};

export default Home;