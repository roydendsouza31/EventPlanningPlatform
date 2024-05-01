import React, { useState, useEffect } from "react";
import axios from "axios";
import "./customer.css";
import { useNavigate } from "react-router-dom";
import EventCalendar from "./EventCalender";
const CustomerProfilePage = () => {
  let navigate = useNavigate();
  const [events, setEvents] = useState([
    { title: "Meeting", start: new Date() },
    { title: "Birthday Party", start: "2024-04-15" },
  ]);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const [editedCustomerData, setEditedCustomerData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/customer");
      setCustomerData(response.data);
      setEditedCustomerData(response.data); // Set editedCustomerData initially
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
    // Set editedCustomerData to a copy of customerData for editing
    setEditedCustomerData({ ...customerData });
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/customer",
        editedCustomerData
      );
      setCustomerData(response.data); // Update customer data with the response from the server
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating customer information:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update editedCustomerData state based on user input
    setEditedCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          {isEditing ? (
            <form onSubmit={handleEditFormSubmit}>
              {/* Input fields for editing customer information */}
              <br />
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedCustomerData.name}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedCustomerData.email}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={editedCustomerData.address}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={editedCustomerData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <br />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <h2>Customer Information</h2>
              <p>
                <strong>Name:</strong> {customerData.name}
                <br />
                <strong>Email:</strong> {customerData.email}
                <br />
                <strong>Address:</strong> {customerData.address}
                <br />
                <strong>Phone Number:</strong> {customerData.phoneNumber}
              </p>
            </>
          )}
        </div>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      <div>
        <h1>Event Calendar</h1>
        <EventCalendar events={[{ title: "Meeting", start: new Date() }]} />
      </div>
    </div>
  );
};

export default CustomerProfilePage;
