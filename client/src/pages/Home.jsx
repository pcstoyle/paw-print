import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DOGS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import Card from '../components/Dogs'; // Assuming this is the correct import

const Home = () => {
  const { loading, data } = useQuery(QUERY_DOGS);
  const dogs = data?.dogs || []; // Corrected the data structure assuming it's an array of dogs
console.log(dogs)
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
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          dogs.map(({ id, name, breed, dob, gender }) => (
            <Card key={id} gender={gender} name={name} breed={breed} dob={dob}/> // Added parentheses for returning JSX
          ))
        )}
      </div>
    </div>
  );
};

export default Home;