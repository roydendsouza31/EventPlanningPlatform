import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./homepage.css";

const ServiceProvidersPage = () => {
  const [topServiceProviders, setTopServiceProviders] = useState([]);

  useEffect(() => {
    const fetchTopServiceProviders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/gettopserviceproviders"
        );
        setTopServiceProviders(response.data);
      } catch (error) {
        console.error("Error fetching top service providers:", error);
      }
    };

    fetchTopServiceProviders();
  }, []);

  return (
    <div className="service-providers-grid_homepage">
      {topServiceProviders.map((provider) => (
        <div key={provider.id} className="provider-card">
          <img src={provider.profilePic} alt={provider.name} />
          <p className="provider-name">{provider.name}</p>
          <p className="provider-rating">Rating: {provider.rating}</p>
          {/* <p className="provider-reviews">Reviews: {provider.numReviews}</p> */}
        </div>
      ))}
    </div>
  );
};

const Homepage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/profile/logout");
      sessionStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
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
          <select className="searchpackage">
            <option value="">Search by category</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
          </select>
          <button className="searchbutton">Search</button>
        </div>
      </div>

      <div className="suppliercategory">
        <div className="titlerow">
          <h2>Seller Categories</h2>
          <button onClick={toggleShowMore}>
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
        <div className="suppliercategorybox">
          <div className="rowwise">
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
          {showMore && (
            <>
              <div className="rowwise">
                <Link to="/serviceproviders/Music" className="suppliericon">
                  <div className="image-placeholder"></div>
                  <p className="category">MUSIC</p>
                </Link>
                <Link to="/serviceproviders/emcee" className="suppliericon">
                  <div className="image-placeholder"></div>
                  <p className="category">EMCEE</p>
                </Link>
                <Link to="/serviceproviders/Catering" className="suppliericon">
                  <div className="image-placeholder"></div>
                  <p className="category">CATERING</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="topservices">
        <div className="titlerow">
          <h2>Top Sellers</h2>
        </div>
        <ServiceProvidersPage />
      </div>

      <footer className="footer">
        <p>© 2024 Creations-Goa. All rights reserved.</p>
        <p>Contact us: contact@example.com</p>
      </footer>
    </div>
  );
};

export default Homepage;
