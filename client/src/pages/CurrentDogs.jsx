import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ROOMS } from '../../utils/queries';
import { QUERY_DOGS } from '../../utils/queries';
import Card from '../components/Card';

const CurrentDogs = () => {
  const {  data: dataRooms } = useQuery(QUERY_ROOMS);
  const rooms = dataRooms?.rooms || [];

  const {  data: dataDogs } = useQuery(QUERY_DOGS);
  const allDogs =  dataDogs?.dogs || [];



    return (
        <section>
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
           <div>
        { (
          rooms.map(({ id, name, breed, roomNum, gender }) => (
            <Card key={id} gender={gender} name={name} breed={breed} roomNum={roomNum} allDogs={allDogs}/> // Added parentheses for returning JSX
          ))
        )}
      </div></section>
    );
  }
  
  export default CurrentDogs;