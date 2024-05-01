import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ServiceProviderPage.css"

const ServiceProvidersPage = () => {
  const { serviceType } = useParams();
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getallserviceproviders/${serviceType}`
        );
        setServiceProviders(response.data);
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };

    fetchServiceProviders();
  }, [serviceType]);

  return (
    <>
    <Link to="/Homepage" className="hompage">Go back to homepage</Link>
    <div className="service-providers-page">
      
      <h1>{serviceType}</h1>
      <div className="service-providers-grid">
        {serviceProviders.map((seller) => (
          <div key={seller.id} className="provider-card">
            <img src={seller.profilePic} alt={seller.name} />
            <p className="provider-name">{seller.name}</p>
            <p className="provider-rating">Rating: {seller.rating}</p>
            <p className="provider-reviews">Reviews: {seller.numReviews}</p>
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default ServiceProvidersPage;
