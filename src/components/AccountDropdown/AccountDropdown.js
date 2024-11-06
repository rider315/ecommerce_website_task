import React from 'react';
import { FiUser, FiBox, FiXCircle, FiStar, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

const AccountDropdown = ({ onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-black text-white rounded-md shadow-lg py-2 z-50">
      <Link href="/account/manage">
        <a className="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
          <FiUser className="mr-2" /> Manage My Account
        </a>
      </Link>
      <Link href="/account/orders">
        <a className="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
          <FiBox className="mr-2" /> My Order
        </a>
      </Link>
      <Link href="/account/cancellations">
        <a className="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
          <FiXCircle className="mr-2" /> My Cancellations
        </a>
      </Link>
      <Link href="/account/reviews">
        <a className="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200">
          <FiStar className="mr-2" /> My Reviews
        </a>
      </Link>
      <button
        onClick={onLogout}
        className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-700 transition-colors duration-200"
      >
        <FiLogOut className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default AccountDropdown;
