// CustomerProfilePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./CustomerProfilePage.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const CustomerProfilePage = () => {
  let navigate = useNavigate();
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const [pastOrders, setPastOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    fetchCustomerData();
    fetchPastOrders();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/customer");
      setCustomerData(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const fetchPastOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/orders");
      setPastOrders(response.data);
    } catch (error) {
      console.error("Error fetching past orders:", error);
    }
  };

  const handleShowOrders = () => {
    setShowOrders(true);
  };

  const handleGoBack = () => {
    setShowOrders(false);
  };

  return (
    <div className="customer">
      <button className="back" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="customer-profile-container">
        <div className="customer-header">
          <h1>{customerData.name}'s Profile</h1>
        </div>
        <div className="customer-info">
          <h2>Customer Information</h2>
          <p>
            <strong>Email:</strong> {customerData.email}
            <br />
            <strong>Address:</strong> {customerData.address}
            <br />
            <strong>Phone Number:</strong> {customerData.phoneNumber}
          </p>
        </div>
        <div className="customer-orders">
          {showOrders ? (
            <div>
              <h2>Past Orders</h2>
              <ul>
                {pastOrders.map((order, index) => (
                  <li key={index}>{order}</li>
                ))}
              </ul>
              <button onClick={handleGoBack}>Back</button>
            </div>
          ) : (
            <button onClick={handleShowOrders}>Show Past Orders</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfilePage;
