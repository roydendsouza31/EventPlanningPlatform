import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/profile/logout");
      sessionStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <img src="" alt="Logo" className="logo" />
        <nav className="nav-links">
          <a href="#">Cart</a>
          <a href="#">Order History</a>
          <a href="#">Profile</a>
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </nav>
      </header>

      <div className="search-bar">
        <h1>
          Your Event, <span>Your Way</span>
        </h1>
        <div className="searchbox">
          <select
            className="searchpackage"
            // onChange={(e) => setSearchTerm(e.target.value)}
          >
            <option value="">Search by category</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="corporate">Corporate Event</option>
            <option value="graduation">Graduation</option>
            {/* Add more options as needed */}
          </select>
          <button className="searchbutton">Search</button>
        </div>
      </div>

      <div className="suppliercategory">
        <div className="titlerow">
          <h2>Suppliers Categories</h2>
          <button>View More</button>
        </div>
        <div className="suppliercategorybox">
          <Link
            to="/serviceproviders/photographer_videographer"
            className="suppliericon"
          >
            <div className="image-placeholder"></div>
            <p className="category">PHOTOGRAPHER</p>
          </Link>
          <Link to="/serviceproviders/venue" className="suppliericon">
            <div className="image-placeholder"></div>
            <p className="category">VENUE PLANNERS</p>
          </Link>
          <Link
            to="/serviceproviders/makeup_hairstylish"
            className="suppliericon"
          >
            <div className="image-placeholder"></div>
            <p className="category">MAKEUP ARTIST</p>
          </Link>
          <Link to="/serviceproviders/decorator" className="suppliericon">
            <div className="image-placeholder"></div>
            <p className="category">DECORATOR</p>
          </Link>
        </div>
      </div>

      <div className="topservices">
        <div className="titlerow">
          <h2>Top Services</h2>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
