// import { useState, useEffect } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// function Login(){
// //   const [userFormData, setUserFormData] = useState({ email: '', password: '' });

// //   const [login] = useMutation(LOGIN_USER);
// //   const handleInputChange = (event) => {
// //     const { name, value } = event.target;
// //     setUserFormData({ ...userFormData, [name]: value });
// //   };
// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const { data } = await login({
// //         variables: { ...userFormData },
// //       });
// //       setUserFormData({
// //         email: '',
// //         password: '',
// //       });
// //       console.log(data);
// //       Auth.login(data.login.token);
// //     } catch (e) {
// //       console.error(e);
// //     }
    
  
// //   };

//   return (
// <section class="flex justify-center">
          

// <div class="mt-7 w-full bg-stone-200 rounded-lg border-4 border-violet-600 shadow dark:border sm:max-w-md xl:p-0 dark:bg-zinc-700 dark:border-violet-400">
// <div class="p-3 space-y-2 md:space-y-2 sm:p-5">
// <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//         Pawprint <br />Login
//     </h1>
//     <form class="space-y-4 md:space-y-6" onSubmit={handleFormSubmit} action="#">
//     <div>
//             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//             <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"
//             //  value={email} onChange={handleInputChange} 
//              required=""/>
        
//         </div>
//         <div>
//             <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//             <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//             // value={password} onChange={handleInputChange} 
//             required=""/>
//         </div>
//         <button type="submit" class="w-full text-white bg-violet-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
//         <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//             Don’t have an account yet? <a href="#Signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
//         </p>
//     </form>
// </div>
// </div>
// </section>
//   );
// };

// export default Login;

          function Login(handlePageChange) {
            return (
            <section class="flex justify-center">
          

          <div class="mt-7 w-full bg-stone-200 rounded-lg border-4 border-violet-600 shadow dark:border sm:max-w-md xl:p-0 dark:bg-zinc-700 dark:border-violet-400">
          <div class="p-3 space-y-2 md:space-y-2 sm:p-5">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Pawprint <br />Login
              </h1>
              <form class="space-y-4 md:space-y-6" 
            //   onSubmit={handleFormSubmit} 
              action="#">
              <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"
                      //  value={email} onChange={handleInputChange} 
                       required=""/>
                  
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      // value={password} onChange={handleInputChange} 
                      required=""/>
                  </div>
                  <button type="submit" class="w-full text-white bg-violet-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  {/* <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#Signup" onClick={() => handlePageChange('Signup')} 
                      className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p> */}
              </form>
          </div>
          </div>
          </section>
            );
          }
          
          export default Login;
