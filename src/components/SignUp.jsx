import React, { useState } from 'react';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Importing the icons
import { FcGoogle } from "react-icons/fc";
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 sm:p-10 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h2>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 border-t-2"
            placeholder="Enter your email adress"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border  rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 border-t-2"
            placeholder="Your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#a5e57f] text-white font-bold py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Sign Up
        </button>

        <div className="flex items-center justify-between mt-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300 transition duration-300">
          <FcGoogle className='mr-4'  size={30}/>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300 transition duration-300">
            <FaApple className="mr-4"  size={30}/> {/* Apple Icon */}
            Continue with Apple
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <a href="/login" className="text-blue-600 font-semibold hover:underline"> Log In</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
