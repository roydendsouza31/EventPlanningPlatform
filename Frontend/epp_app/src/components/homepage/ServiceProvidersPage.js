import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceProvidersPage = ({ match }) => {
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/getallserviceproviders/${match.params.serviceType}`);
        setServiceProviders(response.data);
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };

    fetchServiceProviders();
  }, [match.params.serviceType]);

  return (
    <div>
      <h1>{match.params.serviceType}</h1>
      <div className="service-providers">
        {serviceProviders.map(provider => (
          <div key={provider.id} className="provider-card">
            <img src={provider.profilePic} alt={provider.name} />
            <p>{provider.name}</p>
            <p>Rating: {provider.rating}</p>
            <p>Reviews: {provider.numReviews}</p>
          </div>
        ))}
      </div>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default ServiceProvidersPage;
