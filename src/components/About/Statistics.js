import React from 'react';
import { FiUser, FiDollarSign, FiShoppingBag, FiTrendingUp } from 'react-icons/fi';

const stats = [
  { icon: <FiUser />, label: "Sellers active on our site", value: "10.5k" },
  { icon: <FiDollarSign />, label: "Monthly Product Sale", value: "33k" },
  { icon: <FiShoppingBag />, label: "Customers active on our site", value: "45.5k" },
  { icon: <FiTrendingUp />, label: "Annual gross sales", value: "25k" },
];

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center border p-4 rounded-md bg-white shadow-sm">
          <div className="text-3xl text-red-600 mb-2">{stat.icon}</div>
          <h3 className="text-xl font-bold">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
