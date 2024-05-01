import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ServiceProvidersPage = () => {
  const { serviceType } = useParams();
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getallserviceproviders/${serviceType}`
        );
        console.log(response.data);
        setServiceProviders(response.data);
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };

    fetchServiceProviders();
  }, [serviceType]);

  return (
    <div>
      <h1>{serviceType}</h1>
      <div className="service-providers">
        {serviceProviders.map((seller) => (
          <div key={seller.id} className="provider-card">
            <img src={seller.profilePic} alt={seller.name} />
            <p>{seller.name}</p>
            <p>Rating: {seller.rating}</p>
            <p>Reviews:</p>
          </div>
        ))}
      </div>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default ServiceProvidersPage;
