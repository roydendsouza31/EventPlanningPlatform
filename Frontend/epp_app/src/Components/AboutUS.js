import React from 'react';
import '../styles/aboutus.css';
import FounderCard from './FounderCard'; // Assuming you have a FounderCard component

const founders = [
  {
    id: 1,
    name: 'Royden',
    position: 'Member1',
    address: 'Taligoa-Goa',
    image: 'data:image/webp;base64,<base64_encoded_image_data>',
  },
  {
    id: 2,
    name: 'Alishka',
    position: 'Member2',
    address: 'Calangut-Goa',
    image: './founder.webp', // Replace with the actual image file path
  },
  {
    id: 3,
    name: 'Allieah',
    position: 'Member3',
    address: 'Margoa-Goa',
    image: './founder.webp', // Replace with the actual image file path
  },
  {
    id: 4,
    name: 'Rahul',
    position: 'Member4',
    address: 'Porvorim-Goa',
    image: './founder.webp', // Replace with the actual image file path
  },
  {
    id: 5,
    name: 'Riddhi',
    position: 'Member5',
    address: 'Assonora-Goa',
    image: './founder.webp', // Replace with the actual image file path
  }
];

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="logo">
        <img src="../../public/images/Logo .png" alt="Company Logo" />
      </div>
      <div className="content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo faucibus lacus, eu scelerisque dolor. Fusce nec justo eu felis lobortis laoreet.
        </p>
        <h3>Meet The Minds Behind The Magic</h3>
        <div className="founders">
          {founders.map(founder => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
        <h3>Get ready to create your dream event with us!</h3>
      </div>
    </div>
  );
};

export default AboutUs;
