import React from 'react';

const RegisterForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Create an account</h2>
      <p className="text-gray-500 text-center mb-6">Enter your details below</p>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" 
            placeholder="Name" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Email or Phone Number</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" 
            placeholder="Email or Phone Number" 
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" 
            placeholder="Password" 
          />
        </div>
        <button className="w-full px-4 py-2 mt-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">
          Create Account
        </button>
        <button className="w-full px-4 py-2 mt-2 border rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none flex justify-center items-center">
          <img src="/path/to/google-icon.png" alt="Google Icon" className="w-5 h-5 mr-2" /> Sign up with Google
        </button>
      </form>
      
      <p className="text-sm text-center text-gray-600 mt-4">
        Already have an account? <a href="/login" className="text-red-600 hover:underline">Log in</a>
      </p>
    </div>
  );
};

export default RegisterForm;
