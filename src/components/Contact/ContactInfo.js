import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <div className="w-full md:w-1/3 p-4 border rounded-md bg-white shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <FiPhone className="text-red-600" size={24} />
        <h3 className="text-lg font-semibold">Call To Us</h3>
      </div>
      <p>We are available 24/7, 7 days a week.</p>
      <p className="font-semibold mt-2">Phone: +880611122222</p>
      
      <hr className="my-6" />

      <div className="flex items-center space-x-2 mb-4">
        <FiMail className="text-red-600" size={24} />
        <h3 className="text-lg font-semibold">Write To Us</h3>
      </div>
      <p>Fill out our form and we will contact you within 24 hours.</p>
      <p className="font-semibold mt-2">Emails: customer@exclusive.com</p>
      <p className="font-semibold">Emails: support@exclusive.com</p>
    </div>
  );
};

export default ContactInfo;
