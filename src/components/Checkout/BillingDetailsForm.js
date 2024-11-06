import React from 'react';

const BillingDetailsForm = () => {
  return (
    <form className="space-y-4 bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
      <input type="text" placeholder="First Name*" className="w-full border rounded-md px-4 py-2" required />
      <input type="text" placeholder="Company Name" className="w-full border rounded-md px-4 py-2" />
      <input type="text" placeholder="Street Address*" className="w-full border rounded-md px-4 py-2" required />
      <input type="text" placeholder="Apartment, floor, etc. (optional)" className="w-full border rounded-md px-4 py-2" />
      <input type="text" placeholder="Town/City*" className="w-full border rounded-md px-4 py-2" required />
      <input type="tel" placeholder="Phone Number*" className="w-full border rounded-md px-4 py-2" required />
      <input type="email" placeholder="Email Address*" className="w-full border rounded-md px-4 py-2" required />
      
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox" />
        <span>Save this information for faster check-out next time</span>
      </label>
    </form>
  );
};

export default BillingDetailsForm;
