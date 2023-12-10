import { Link } from 'react-router-dom'
function Home() {
    return (
      <section>
        <div className='my-4'>
        <button ><Link to='/addDog'>
      Add a New Dog
      </Link></button>
      </div>
      <div className='my-4'>
        <button ><Link to='/addOwner'>
      Add a New Owner
      </Link></button>
      </div>
      <div>
      <input type="search" placeholder="search"/>
      <button> search</button></div>
      </section>

     
    );
  }
  
  export default Home;