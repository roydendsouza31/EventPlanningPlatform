import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
  
    useEffect(() => {
      const fetchTestimonials = async () => {
        try {
          const response = await axios.get('/api/testimonial'); // Fetch data from correct endpoint
          setTestimonials(response.data);
        } catch (error) {
          console.error('Error fetching testimonials:', error);
        }
      };
  
      fetchTestimonials();
    }, []);
    return (
        <div>
            <div id="header">
                <img id="logo" src="../../public/images/Logo .png" alt="Logo" />
                <div id="buttons">
                    <button className="button">sign-up</button>
                    <button className="button">sign-in</button>
                    <button className="button">Join as Vendor</button>
                    <Link to="/AboutUs">
                        <button className="button">About Us</button>
                    </Link>
                </div>
            </div>

            <div className="text-container">
                <div className="website-name">Creations</div>
                <div className="description">Celebrate in style.</div>
            </div>

            <div className="testimonial-container">
            {testimonials.map(testimonial => (
                <div className="testimonial" key={testimonial._id}>
                <p>{testimonial.review}</p>
                <div className="profile">
                    <img src={`data:${testimonial.profilePic.contentType};base64,${testimonial.profilePic.data}`} alt="Profile Picture" />
                    <span className="name">{testimonial.clientName}</span>
                </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Testimonials;
