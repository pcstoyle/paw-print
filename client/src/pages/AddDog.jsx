import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DOG } from '../../utils/mutations';
import Auth from '../../utils/auth';
const AddDog = ()=>{
  const [userFormData, setUserFormData] = useState({
    name:'',
    breed: '',
    dob: '',
    gender: '',
});
const [addDog, {error} ]=useMutation(ADD_DOG);
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserFormData({ ...userFormData, [name]: value });
};
const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const { data } = await addDog({
      variables: { ...userFormData },
      
    });
    console.log(data);
  } catch (err) {
    console.log(error)
    console.error(err);
  }
  setUserFormData({
    name:'',
    breed: '',
    dob: '',
    gender: '',
  });
};
return(
<section className="flex justify-center">
    <div className="mt-7 w-full bg-stone-200 rounded-lg border-4 border-violet-600 shadow dark:border xl:p-0 dark:bg-zinc-700 dark:border-violet-400">
        <div className="p-3 space-y-2 md:space-y-2 sm:p-5">
             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add a dog
            </h1>
            <form className="space-y-4 md:space-y-6" 
            onSubmit={handleFormSubmit}
            action="#">
                   <div>
                <div className="grid grid-cols-2 gap-4">
   
                    <div className="relative mb-2" >
                         <input
                            type="text"
                            id="name"
                            name='name'
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                           
                            value= {userFormData.name} 
                            onChange={handleInputChange}
                            placeholder="Name" 
                            required=""/>
   
                    </div>
   
                    <div className="relative mb-2" >
                    <input
                            type="text"
                            name='breed'
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="breed"
                            value= {userFormData.breed} 
                            onChange={handleInputChange}
                            placeholder="Breed"
                            required="" />
   
                       
           
                    </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
   <div></div>
   <div className="relative mb-2">
        <input
           type="text"
           name='dob'
           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           id="dob"
           value= {userFormData.dob} 
           onChange={handleInputChange}
           placeholder="Birth Year" />

   </div>

   <div className="relative mb-2" >
   <input
           type="text"
           name='gender'
           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           id="gender"
           value= {userFormData.gender} 
           onChange={handleInputChange}
           placeholder="Gender" />

      

   </div>
   </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                <button  type="submit" variant="success" className="w-full text-white bg-violet-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link className='text-white'to='/Home'>Finish</Link></button>
                <button  type="submit" variant="success" className="w-full text-white bg-violet-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link className='text-white' to='/addDog'>Add another dog</Link></button>
                </div>
            </form>
        </div>
    </div>
</section>
);
}
export default AddDog;