import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_DOGS } from '../../utils/queries';
import { Link } from 'react-router-dom'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDogs, { loading, error, data }] = useLazyQuery(QUERY_DOGS);

  const handleSearch = () => {
    
    searchDogs({ variables: { searchTerm } });
    console.log(searchTerm);
  };

  return (
    <div>
      <Link to="/addOwner">
        <button>Add an Owner</button>
      </Link>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search dogs..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.searchDogs && data.searchDogs.length === 0 && (
  <p>No dogs found with that information.</p>
)}
      {data && data.searchDogs && data.searchDogs.map((dog) => (
  <div key={dog.id}>
    <p>Name: {dog.name}</p>
    <p>Breed: {dog.breed}</p>
    {/* Display other dog details */}
  </div>
))}
    </div>
  );
};
  
  export default Home;

