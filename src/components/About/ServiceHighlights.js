import React from 'react';
import { FiTruck, FiHeadphones, FiShield } from 'react-icons/fi';

const services = [
  { icon: <FiTruck />, title: "Free and Fast Delivery", description: "Free delivery for all orders over $140" },
  { icon: <FiHeadphones />, title: "24/7 Customer Service", description: "Friendly 24/7 customer support" },
  { icon: <FiShield />, title: "Money Back Guarantee", description: "We return money within 30 days" },
];

const ServiceHighlights = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 my-12">
      {services.map((service, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl text-red-600 mb-2">{service.icon}</div>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceHighlights;
