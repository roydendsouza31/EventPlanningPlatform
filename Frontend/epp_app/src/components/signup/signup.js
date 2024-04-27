import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import {Link} from "react-router-dom"

import { useNavigate } from "react-router-dom"; 

const Signup = () => {
  
  const navigate = useNavigate(); 
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

  const register = (e) => {
    e.preventDefault();
    const { name, surname, email, password, confirmPassword } = user;
    if (name && surname && email && password) {
      axios.post("http://localhost:3000/signup", user)
        .then(res => {
          console.log(res.data);
          navigate("/login")
        })
        .catch(error => {
          console.error("Error signing up:", error);
        });
    } else {
      alert("invalid input");
    }
  };
  

  return (
    <div className="signup">
     {console.log(user)}
      <h1>Sign Up</h1>
      <form > 
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="First Name"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          name="surname"
          value={user.surname}
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
        <button type="submit" className="button" onClick={register}>
          Signup
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
