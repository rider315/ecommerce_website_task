import React from 'react';
import Link from 'next/link';

const AccountSidebar = () => {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
      <ul className="space-y-2 text-gray-700">
        <li>
          <Link href="/account/profile" className="hover:text-red-600">My Profile</Link>
        </li>
        <li>
          <Link href="/account/address-book" className="hover:text-red-600">Address Book</Link>
        </li>
        <li>
          <Link href="/account/payment-options" className="hover:text-red-600">My Payment Options</Link>
        </li>
        <h2 className="font-semibold text-lg mt-6 mb-4">My Orders</h2>
        <li>
          <Link href="/account/returns" className="hover:text-red-600">My Returns</Link>
        </li>
        <li>
          <Link href="/account/cancellations" className="hover:text-red-600">My Cancellations</Link>
        </li>
        <h2 className="font-semibold text-lg mt-6 mb-4">My Wishlist</h2>
        <li>
          <Link href="/account/wishlist" className="hover:text-red-600">My Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
