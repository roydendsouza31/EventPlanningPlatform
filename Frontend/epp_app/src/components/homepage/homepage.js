import React from "react";
import { useNavigate } from "react-router-dom";
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
      <h1>Hello Homepage</h1>
      <div className="button" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
