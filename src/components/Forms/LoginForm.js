import React from 'react';

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Log in to Exclusive</h2>
      <p className="text-gray-500 text-center mb-6">Enter your details below</p>
      
      <form className="space-y-4">
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
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">Log In</button>
          <a href="#" className="text-sm text-red-600 hover:underline">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
