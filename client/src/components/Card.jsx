function Card ( {id, title, breed, name, imgsrc} ) {
    return (
        <div class="h-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-center px-4 pt-4">
        
    </div>
    <div class="flex flex-row items-center pb-10">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{breed}</span>
        <div class="flex mt-4 md:mt-6">
        
        </div>
    </div>
</div>
    )
};

export default Card;