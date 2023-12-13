import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_OWNER } from '../../utils/mutations';
import Auth from '../../utils/auth';
const AddOwner = ()=>{
  const [userFormData, setUserFormData] = useState({
    first:'',
    last: '',
    email: '',
    phone: '',
});
const [addOwner, {error} ]=useMutation(ADD_OWNER);
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserFormData({ ...userFormData, [name]: value });
};
const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    const { data } = await addOwner({
      variables: { ...userFormData },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  setUserFormData({
    first: '',
    last: '',
    email: '',
    phone: '',
  });
};
    return(
        <section>
     <section className="flex justify-center">
              
    
              <div className="mt-7 w-full bg-stone-200 rounded-lg border-4 border-violet-600 shadow dark:border xl:p-0 dark:bg-zinc-700 dark:border-violet-400">
              <div className="p-3 space-y-2 md:space-y-2 sm:p-5">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Add an Owner
                  </h1>
                  <form className="space-y-4 md:space-y-6"  
                  onSubmit={handleFormSubmit}
          action="#">
                    <div class="grid grid-cols-2 gap-4">
    
          <div class="relative mb-6">
          <input type="text" name="first" id="first" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"  value= {userFormData.first} 
             onChange={handleInputChange} required=""/>
        
          </div>
    
          <div class="relative mb-6">
          <input type="text" name="last" id="last" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name"  value= {userFormData.last} 
             onChange={handleInputChange} required=""/>
          </div>
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
              type="text"
              name='email'
              id='email'
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"             
              placeholder="Email" 
              value={userFormData.email}
              onChange={handleInputChange}/>

                      </div>
                      <div class="relative mb-6" data-te-input-wrapper-init>
                      <input
              type="text"
              name='phone'
              id='phone'
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"     
              placeholder="Phone" 
              value={userFormData.phone}
              onChange={handleInputChange}/>

                      </div>
                      <button  type="submit" variant="success" className="w-full text-white bg-violet-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link className='text-white' to='/addDog'>Submit</Link></button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          
                      </p>
                  </form>
              </div>
              </div>
              </section>
        </section>
    );
    }
    export default AddOwner;