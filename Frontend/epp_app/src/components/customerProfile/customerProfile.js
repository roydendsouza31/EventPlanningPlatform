// CustomerProfilePage.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./customer.css";
import { useNavigate } from "react-router-dom";
import EventCalendar from "./EventCalender"; // Ensure correct import path
const CustomerProfilePage = () => {
  let navigate = useNavigate();
  const [events, setEvents] = useState([]);
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
    fetchEvents();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getcustomer/:email"); // Correct URL
      setCustomerData(response.data);
      setEditedCustomerData(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setEditedCustomerData({ ...customerData });
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/api/updatecustomer/${customerData.email}`, // Correct URL
        editedCustomerData
      );
      setCustomerData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating customer information:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      const formattedEvents = response.data.map((event) => ({
        id: event._id,
        title: event.title,
        start: new Date(event.start),
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleDateClick = async (info) => {
    console.log("Date clicked:", info);
    const title = prompt("Enter event title:");
    if (title) {
      const timeString = prompt("Enter event time (HH:MM):");
      if (timeString) {
        const start = new Date();
        const [hours, minutes] = timeString.split(":");
        start.setHours(parseInt(hours));
        start.setMinutes(parseInt(minutes));
        try {
          const response = await axios.post(
            "http://localhost:5000/api/events",
            {
              title,
              start,
            }
          );
          const newEvent = response.data;
          setEvents([...events, newEvent]);
        } catch (error) {
          console.error("Error adding event:", error);
        }
      } else {
        console.error("Time is required.");
      }
    }
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
                disabled
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
        <EventCalendar events={events} handleDateClick={handleDateClick} />
      </div>
    </div>
  );
};

export default CustomerProfilePage;
