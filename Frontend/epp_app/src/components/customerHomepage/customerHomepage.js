import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./homepage.css";

const CustomerHomepage = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/profile/logout");
      sessionStorage.clear();
      navigate("/customerlogin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="homepage">
      <header className="header navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/logo.png" alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/customerhomepage">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customerhomepage">
                  Order History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customerhomepage">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/customerhomepage"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="search-bar">
        <h1>
          Your Event, <span>Your Way</span>
        </h1>
        <div className="searchbox">
          <select className="searchpackage">
            <option value="">Search packages by category</option>
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
      </div>

      <footer className="footer">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">
              © 2021 Creations-Goa, Inc
            </p>

            <a
              href="/"
              className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32"></svg>
            </a>

            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item">
                <a href="/" className="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link px-2 text-muted">
                  About
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default CustomerHomepage;
