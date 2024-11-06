import React from 'react';
import Header from '../src/components/Layout/Header';
import Footer from '../src/components/Layout/Footer';
import CompanyStory from '../src/components/About/CompanyStory';
import Statistics from '../src/components/About/Statistics';
import TeamMembers from '../src/components/About/TeamMembers';
import ServiceHighlights from '../src/components/About/ServiceHighlights';

const About = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">About</h1>
        <p className="text-sm text-gray-500 mb-8">Home / About</p>
        
        <CompanyStory />
        <Statistics />
        <TeamMembers />
        <ServiceHighlights />
      </div>
      <Footer />
    </>
  );
};

export default About;
