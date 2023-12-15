import React, { useState } from 'react';



const Card = ({ id, roomNum, breed, name, gender, allDogs }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <div className="grid grid-cols-4 m-1">
        <div className="h-15 col-span-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="grid grid-cols-4 p-4 ">
        <p className="text-center ">{roomNum}</p>
        <h5 className="text-gray-900 dark:text-white text-center">{name}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{breed}</p>
        <p className="">{gender}</p>
        
    </div>
</div>
{showDropdown && (
                <select className="rounded-lg border border-gray-300">
                    {allDogs.map((dog) => (
                        <option key={dog.id} value={dog.id}>
                            {dog.name} - {dog.breed}
                        </option>
                    ))}
                </select>
            )}

            <button 
                onClick={toggleDropdown}
                className="border rounded-lg text-white bg-violet-400 hover:bg-violet-700">
                Check-in
            </button>
        </div>
    );
};

export default Card;