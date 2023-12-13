function Card ( { name, breed, gender, dob} ) {
    return (
        <div className="grid grid-cols-4 m-1 ">
            <div></div>
        <div className="h-15 col-span-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="grid grid-cols-4 p-4 ">
        <p className="text-center text-black ">{gender}</p>
        <h5 className="text-gray-900 dark:text-white text-center">{name}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{breed}</p>
        <p className="">{dob}</p>
        
    </div>
</div>
{/* <button className="border rounded-lg  text-white bg-violet-400 hover:bg-violet-700 ">Check-in</button> */}
</div>
    )
};

export default Card;