import React from 'react';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';
import ContactInfo from '../src/components/Contact/ContactInfo';
import ContactForm from '../src/components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <p className="text-sm text-gray-500 mb-8">Home / Contact</p>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
