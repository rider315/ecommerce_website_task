import React from 'react';
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const team = [
  { name: "Tom Cruise", role: "Founder & Chairman", image: "/path/to/tom.jpg" },
  { name: "Emma Watson", role: "Managing Director", image: "/path/to/emma.jpg" },
  { name: "Will Smith", role: "Product Designer", image: "/path/to/will.jpg" },
];

const TeamMembers = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <FiTwitter />
              <FiInstagram />
              <FiLinkedin />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
