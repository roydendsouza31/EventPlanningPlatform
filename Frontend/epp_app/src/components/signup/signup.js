import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    const { name, surname, email, password, confirmPassword } = user;
    if (
      !name.trim() ||
      !surname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill out all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      axios
        .post("http://localhost:3000/signup", user)
        .then((res) => {
          if (res.status === 201) {
            setRegistrationSuccess(true);
            setTimeout(() => {
              navigate("/login");
            }, 2000); // Redirect after 2 seconds
          } else if (res.status === 203) {
            alert("User already exists. Please Login.");
          }
        })
        .catch((error) => {
          console.error("Error signing up:", error);
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          name="surname"
          placeholder="Last Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="button" onClick={register}>
          Signup
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      {registrationSuccess && (
        <div className="success-banner">
          <p>Registration successful!</p>
        </div>
      )}
    </div>
  );
};

export default Signup;
