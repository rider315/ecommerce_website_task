import React, { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import AccountDropdown from '../AccountDropdown/AccountDropdown';

const Header = () => {
  // State to manage the visibility of the account dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to handle logout (you can implement actual logout logic here)
  const handleLogout = () => {
    console.log("User logged out");
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">Exclusive</Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/home">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>

        {/* Search, Cart, and Account */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative text-gray-600">
            <input
              type="text"
              className="h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <FiSearch className="text-gray-500" />
            </button>
          </div>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <Link href="/cart" className="text-white text-xl">
              <FiShoppingCart />
            </Link>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              2
            </span>
          </div>

          {/* Account Icon with Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white text-xl focus:outline-none">
              <FiUser />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-black text-white rounded-md shadow-lg py-2 z-50">
                <AccountDropdown onLogout={handleLogout} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
