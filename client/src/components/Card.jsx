function Card ( {id, kennelNum, breed, name, date} ) {
    return (
        <div class="grid grid-cols-4 m-1 ">
        <div class="h-15 col-span-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div class="grid grid-cols-4 p-4 ">
        <p class="text-center ">{kennelNum}</p>
        <h5 class="text-gray-900 dark:text-white text-center">{name}</h5>
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center">{breed}</p>
        <p class="">{date}</p>
        
    </div>
</div>
<button class="border rounded-lg  text-white bg-violet-400 hover:bg-violet-700 ">Check-in</button>
</div>
    )
};

export default Card;