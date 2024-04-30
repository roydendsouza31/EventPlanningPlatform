import React, { useState } from "react";
import axios from "axios";
import "./sellerSignup.css";

const SellerSignup = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyname: "",
    companyemail: "",
    officephone: "",
    typeofservice: ""
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
    const { name, surname, email, password, confirmPassword, address, phone, typeofservice, companyname, companyemail, officephone } = user;
    if (!name.trim() || !surname.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !address.trim() || !phone.trim() || !typeofservice.trim() || !companyname.trim() || !companyemail.trim() || !officephone.trim()) {
      alert("Please fill out all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address");
    } else {
      axios
        .post("http://localhost:3000/sellersignup", user)
        .then((res) => {
          if (res.status === 201) {
            setRegistrationSuccess(true);
            setTimeout(() => {
            }, 2000);
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
    <div className="signup_seller">
        {console.log(user)}
      <form>
        <div className="seller-details">
          <h2>Seller Details</h2>
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
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          ></input>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
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
        </div>

        <div className="company-details">
          <h2>Company Details</h2>
          <input
            type="text"
            name="companyname"
            placeholder="Company Name"
            onChange={handleChange}
            required
          ></input>
          <input
            type="email"
            name="companyemail"
            placeholder="Company Email"
            onChange={handleChange}
            required
          ></input>
          <input
            type="tel"
            name="officephone"
            placeholder="Office Phone Number"
            onChange={handleChange}
            required
          ></input>
          <input
            type="text"
            name="typeofservice"
            placeholder="Service"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit" className="button" onClick={register}>
          Signup
        </button>
      </form>
      
      {registrationSuccess && (
        <div className="success-banner">
          <p>Registration successful!</p>
        </div>
      )}
    </div>
  );
};

export default SellerSignup;
