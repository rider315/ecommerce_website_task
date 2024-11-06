import React from 'react';
import Link from 'next/link';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';

const Custom404 = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-600 mb-8">Your visited page not found. You may go home page.</p>
        
        <Link href="/">
          <a className="inline-block bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none">
            Back to home page
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Custom404;
