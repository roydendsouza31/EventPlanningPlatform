import React from 'react';
import './aboutus.css';
import pro from "./pro2.jpg"
import pro1 from "./pro3.jpg"
import pro2 from "./pro4.webp"
import pro3 from "./pro5.png"
import pro4 from "./profile1.jpg"
import logo from "./logo.png"

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="logo">
      <img src={logo} alt="Company Logo" />
      </div>
      <div className="content">
        <h2><i><u>About Us</u></i></h2>
        <p><i>
        Welcome to Creations, where dreams become events and moments turn into memories!<br/>
        At Creations, we specialize in turning your visions into reality.<br/>
        With years of experience and a passion for creating unforgettable experiences, our team of dedicated professionals is here to handle every detail of your event, from conception to execution.<br/>
        Whether you're planning an intimate gathering, a corporate event, or a grand celebration, we believe that every event deserves to be extraordinary.<br/>
         From weddings to birthdays, anniversaries to corporate functions, our expertise spans across a wide range of occasions.
        What sets us apart is our commitment to personalized service and attention to detail.<br/> We understand that each event is unique,
        and we work closely with you to understand your preferences, style, and budget,<br/> ensuring that your event reflects your vision and exceeds your expectations.</i>
        </p>
        <h2>Meet The Minds Behind The Magic</h2>
        <div className="founders">
          {/* First Founder Card */}
          <div className="founder-card">
            <img src={pro2} alt="Royden" className="founder-image" />
            <div className="founder-details">
              <h4>Royden</h4>
              <p><strong>Email:</strong> <a href="mca.2309@unigoa.ac.in">mca.2309@unigoa.ac.in</a></p>

            </div>
          </div>

          {/* Second Founder Card */}
          <div className="founder-card">
            <img src={pro} alt="Alishka" className="founder-image" />
            <div className="founder-details">
              <h4>Alishka</h4>
              <p><strong>Email:</strong> <a href="mca.2313@unigoa.ac.in">mca.2313@unigoa.ac.in</a></p>
            </div>
          </div>

          {/* Third Founder Card */}
          <div className="founder-card">
            <img src={pro1} alt="Allieah" className="founder-image" />
            <div className="founder-details">
              <h4>Allieah</h4>
              <p><strong>Email:</strong> <a href="mca.2315@unigoa.ac.in">mca.2315@unigoa.ac.in</a></p>
            </div>
          </div>

          {/* Fourth Founder Card */}
          <div className="founder-card">
            <img src={pro3} alt="Rahul" className="founder-image" />
            <div className="founder-details">
              <h4>Rahul</h4>
              <p><strong>Email:</strong> <a href="mca.2348@unigoa.ac.in">mca.2348@unigoa.ac.in</a></p>
            </div>
          </div>

          {/* Fifth Founder Card */}
          <div className="founder-card">
            <img src={pro4} alt="Riddhi" className="founder-image" />
            <div className="founder-details">
              <h4>Riddhi</h4>
              <p><strong>Email:</strong> <a href="mca.2342@unigoa.ac.in">mca.2342@unigoa.ac.in</a></p>
            </div>
          </div>
        </div>
        <h3><i>Get ready to create your dream event with us!</i></h3>
      </div>
    </div>
  );
};

export default AboutUs;
