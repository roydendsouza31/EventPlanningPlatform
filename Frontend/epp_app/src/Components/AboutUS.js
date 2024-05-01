import React from 'react';
import FounderCard from './FounderCard'; // Assuming you have a FounderCard component

const founders = [
  {
    id: 1,
    name: 'Royden D,Souza',
    position: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'john-doe.jpg', // Replace with the actual image file path
  },
  {
    id: 2,
    name: 'Alishka Fernandis',
    position: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'jane-smith.jpg', // Replace with the actual image file path
  },
  {
    id: 3,
    name: 'ALLieah',
    position: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'jane-smith.jpg', // Replace with the actual image file path
  },
  {
    id: 4,
    name: 'Rahul',
    position: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'jane-smith.jpg', // Replace with the actual image file path
  },
  {
    id: 5,
    name: 'Riddhi',
    position: 'CTO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'jane-smith.jpg', // Replace with the actual image file path
  }
];

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="logo">
        <img src="..\..\public\Modern Minimal Name Initials Logo .png" alt="Company Logo" />
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo faucibus lacus, eu scelerisque dolor. Fusce nec justo eu felis lobortis laoreet.
        </p>
        <h3>Our Founders</h3>
        <div className="founders">
          {founders.map(founder => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
