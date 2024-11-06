import React from 'react';

const EditProfileForm = () => {
  return (
    <div className="w-3/4 p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Edit Your Profile</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" defaultValue="Md" />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" defaultValue="Rimel" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" defaultValue="rimel111@gmail.com" />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" defaultValue="Kingston, 5236, United States" />
        </div>
        
        <h3 className="font-semibold text-lg mt-6">Password Changes</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Current Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-gray-700">New Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-gray-700">Confirm New Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button type="button" className="text-gray-600 hover:underline">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
