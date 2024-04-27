import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/signup", user); // Adjust the URL to match your server
      console.log(user);

      console.log(response.data);
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={user.firstname}
          placeholder="First Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          name="lastname"
          value={user.lastname}
          placeholder="Last Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="button">
          Signup
        </button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
