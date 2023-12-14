import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);
  const history = useNavigate ();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
      history.push('/Home');
    } catch (e) {
      console.error(e);
    }
  };

  return (
 <section className="flex justify-center">


<div className="mt-7 w-full bg-stone-200 rounded-lg border-4 border-violet-600 shadow dark:border sm:max-w-md xl:p-0 dark:bg-zinc-700 dark:border-violet-400">
<div className="p-3 space-y-2 md:space-y-2 sm:p-5">
<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Pawprint <br />Login
    </h1>
    <form className="space-y-4 md:space-y-6" noValidate validated={validated} 
    onSubmit={handleFormSubmit}
     action="#">
    <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"
             value= {userFormData.email} 
             onChange={handleInputChange} 
             required=""/>
        
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={userFormData.password}
             onChange={handleInputChange} 
            required=""/>
        </div>
        {error && <p className="text-red-600">Error: Incorrect email or password.</p>}
        <button disabled={!(userFormData.email && userFormData.password)}
          variant="success" type="submit" className="w-full text-white bg-violet-400 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet? <Link to='/signup'> Sign up! </Link>
        </p>
    </form>
</div>
</div>
</section> 
  );
};

export default Login;
