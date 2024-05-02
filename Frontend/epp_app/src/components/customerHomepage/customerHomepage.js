import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./customerHomepage.css";
import { useEffect } from "react";
import logo from "./assets/logo.png";
import camera from "./assets/camera.png";
import catering from "./assets/catering.png";
import decorator from "./assets/decoration.png";
import emcee from "./assets/emcee.png";
import makeup from "./assets/makeup.png";
import music from "./assets/music.png";
import venue from "./assets/venue.png";

const ServiceProvidersPage = () => {
  const [topServiceProviders, setTopServiceProviders] = useState([]);

  useEffect(() => {
    const fetchTopServiceProviders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/gettopserviceproviders"
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
      <header className="header">
        <img src={logo} height={100} alt="Logo" className="logo mx-5" />
        <nav className="nav-links">
          <a href="/customerhomepage">Cart</a>
          <a href="/customerhomepage">Order History</a>
          <a href="/customerhomepage">Profile</a>
          <a href="/customerhomepage" onClick={handleLogout}>
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
            <div
              className="suppliericon text-center"
              onClick={() =>
                navigate("/serviceproviders/photographer_videographer")
              }
            >
              <img
                src={camera}
                height={100}
                alt="Photographer"
                className="logo mx-5"
              />
              <p className="category">Photographer</p>
            </div>
            <div
              className="suppliericon text-center"
              onClick={() => navigate("/serviceproviders/venue")}
            >
              <img
                src={venue}
                height={100}
                alt="Venue Planner"
                className="logo mx-5"
              />
              <p className="category">Venue Planner</p>
            </div>
            <div
              className="suppliericon text-center"
              onClick={() => navigate("/serviceproviders/makeup_hairstylish")}
            >
              <img
                src={makeup}
                height={100}
                alt="Makeup Artist"
                className="logo mx-5"
              />
              <p className="category">Makeup Artist</p>
            </div>
            <div
              className="suppliericon text-center"
              onClick={() => navigate("/serviceproviders/decorator")}
            >
              <img
                src={decorator}
                height={100}
                alt="Decorator"
                className="logo mx-5"
              />
              <p className="category">Decorator</p>
            </div>
          </div>
          {showMore && (
            <div className="rowwise">
              <div
                className="suppliericon text-center"
                onClick={() => navigate("/serviceproviders/Music")}
              >
                <img
                  src={music}
                  height={100}
                  alt="Music"
                  className="logo mx-5"
                />
                <p className="category">Music</p>
              </div>
              <div
                className="suppliericon text-center"
                onClick={() => navigate("/serviceproviders/emcee")}
              >
                <img
                  src={emcee}
                  height={100}
                  alt="Emcee"
                  className="logo mx-5"
                />
                <p className="category">Emcee</p>
              </div>
              <div
                className="suppliericon text-center"
                onClick={() => navigate("/serviceproviders/Catering")}
              >
                <img
                  src={catering}
                  height={100}
                  alt="Catering"
                  className="logo mx-5"
                />
                <p className="category">Catering</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="topservices">
        <div className="titlerow">
          <h2>Top Sellers</h2>
        </div>
        <ServiceProvidersPage />
      </div>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">© 2021 Creations-Goa, Inc</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default CustomerHomepage;
