import React from "react";
import 'flowbite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

function Login() {
  const userSchema = object({
    name: string().min(6,"must be >6").required("required"),
    email: string().email("not valid email").required("required"),
    password: string().min(6,"must be >6").required("required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  function save(params) {
    console.log(params);
  }

  return (
    <>

    <form onSubmit={handleSubmit(save)} className="max-w-sm mx-auto w-full bg-blue-400">
    <h2 className="text-white "> Log In</h2>
      <div className="mb-5 flex items-center mx-4">
        <label htmlFor="Name" className="block mb-2 mx-4 text-sm font-medium text-gray-900 dark:text-white">name</label>
        <input type="text" id="Name" {...register("name")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div className="mb-5 flex items-center mx-4">
        <label htmlFor="email" className="block mb-2   mx-4 text-sm font-medium text-gray-900 dark:text-white">email </label>
        <input type="email" id="email" {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-5 flex items-center mx-4">
        <label htmlFor="password" className="block mb-2  mx-4 text-sm font-medium text-gray-900 dark:text-white">password </label>
        <input type="password" id="password" {...register("password")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>
      <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onChange={save}>send</button>
    </form>
    </>
  );
}

export default Login;
