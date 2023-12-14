import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_DOG } from '../../utils/queries';
import Card from '../components/Dogs';
import { Link } from 'react-router-dom'


const Home = () => {
  const [dogName, setDogName] = useState('');
  const [searchDog, { loading, data, called }] = useLazyQuery(QUERY_SINGLE_DOG);
  const dog = data?.dog;
console.log(data)
  const handleSearch = () => {
    searchDog({ variables: { name: dogName } });
  };

  return (
      <section>
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
    <div>
    <div>
        <input value={dogName} onChange={(e) => setDogName(e.target.value)} />
        <button onClick={handleSearch} disabled={loading}>Search</button>
                <div className="grid grid-cols-4 m-1 ">
        <div></div>
    <div className="h-15 col-span-2 bg-violet-200 border border-violet-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className="grid grid-cols-4 p-4 ">
    <p className="text-center text-black ">Gender</p>
    <h5 className="text-gray-900 dark:text-white text-center">Name</h5>
    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Breed</p>
    <p className="">Birth Year</p>
    
</div>
</div>
</div>

{loading && <p>Loading...</p>}
        {called && !loading && !dog && <p>No Dog Found</p>}
        {dog && (
          <Card key={dog._id} gender={dog.gender} name={dog.name} breed={dog.breed} dob={dog.dob}/>
        )}
      </div></div></section>
);

};

export default Home;