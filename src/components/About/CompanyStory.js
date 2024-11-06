import React from 'react';

const CompanyStory = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 my-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh...
        </p>
        <p className="text-gray-600">
          Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer...
        </p>
      </div>
      <div className="md:w-1/2">
        <img src="/path/to/image.jpg" alt="Company Story" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default CompanyStory;
