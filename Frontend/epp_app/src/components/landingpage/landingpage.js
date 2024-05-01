import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./landingpage.css";
import logo from "./logo.png"; 

const Landingpage = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Add currentIndex state

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api//gettestimonials");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? testimonials.length - 3 : newIndex;
    });
  };
  
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 3;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  return (
    <div className="landingpage">
      <header className="header">
        <img src={logo} height={70} alt="Logo" className="logo" />
        <nav className="nav-links">
          <Link to="/" className="btn">Home</Link>
          <Link to="/about" className="btn">About Us</Link>
          <Link to="/signup" className="btn">Sign up</Link>
          <Link to="/login" className="btn">Log in</Link>
          <Link to="/sellersignup" className="btn">Join as Seller</Link>
        </nav>
      </header>

      <div>
        <h1 className="titlelandingpage">Crafting <span>Unforgettable</span><br/>Moments</h1>
        <p></p>
      </div>

      <div>
        <h2>What We Provide</h2>
        <div className="service-container">
          <div className="row">
            <div className="service-box">Venue Selection</div>
            <div className="service-box">Decor & Design</div>
            <div className="service-box">Beautician</div>
          </div>
          <div className="row">
            <div className="service-box">Music</div>
            <div className="service-box">Catering</div>
            <div className="service-box">Photographer</div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-carousel">
        <button className="testimonialbtn" onClick={prevTestimonial}>Prev</button>
          {testimonials.slice(currentIndex, currentIndex + 3).map(testimonial => (
            <div key={testimonial._id} className="testimonial-card">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-content">{testimonial.testimonial}</p>
            </div>
            
          ))}
           <button className="testimonialbtn" onClick={nextTestimonial}>Next</button>
        </div>
      </div>

      <footer className="footer">
  <p>© 2024 Crafting Unforgettable Moments. All rights reserved.</p>
  <p>Contact us: contact@example.com</p>
</footer>

    </div>
  );
};

export default Landingpage;
