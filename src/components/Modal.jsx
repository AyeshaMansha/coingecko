import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa'; // Importing the icons
import { FcGoogle } from 'react-icons/fc';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { email, password });
    onClose(); // Close the modal after submission (optional)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative mx-4 sm:mx-0">
      <button
  className="absolute top-4 right-4 py-6 text-gray-600 hover:text-red-500 transition duration-300 w-12 h-12 flex items-center justify-center rounded-full"
  onClick={onClose}
  aria-label="Close"
>
  &times; {/* Close Icon */}
</button>
        <h2 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email address" // Placeholder for the input field
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your password" // Placeholder for the input field
            />
          </div>
          <button type="submit" className="w-full bg-[#a5e57f] text-white font-bold py-2 rounded hover:bg-green-600 transition duration-300">
            Sign Up
          </button>
          <div className="flex items-center justify-between mt-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300 transition duration-300">
              <FcGoogle className='mr-4' size={30} />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300 transition duration-300">
              <FaApple className="mr-4" size={30} />
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
    </div>
  );
};

export default Modal;
