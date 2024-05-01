import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./landingpage.css";
import logo from "./logo.png"; 

const Landingpage = () => {
  const navigate = useNavigate();

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
        <h1 class="titlelandingpage">Crafting <span>Unforgettable</span><br/>Moments</h1>
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

      </div>
    </div>
  );
};

export default Landingpage;
