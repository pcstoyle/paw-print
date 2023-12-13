import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DOGS } from '../../utils/queries';
import Card from '../components/Dogs';

const DogProfile = () => {
    const { loading, data } = useQuery(QUERY_DOGS);
    const dogs = data?.dogs || []; // Corrected the data structure assuming it's an array of dogs
  console.log(dogs)
    return (
        <section>
           <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          dogs.map(({ id, name, breed, dob, gender }) => (
            <Card key={id} gender={gender} name={name} breed={breed} dob={dob}/> // Added parentheses for returning JSX
          ))
        )}
      </div></section>
    );
  }
  
  export default DogProfile;