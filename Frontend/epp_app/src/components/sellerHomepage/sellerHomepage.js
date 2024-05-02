// Home page for seller
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

const SellerHomepage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/profile/logout");
      sessionStorage.clear();
      navigate("/sellerlogin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const sellerID = sessionStorage.getItem("sellerID");

    console.log(productName, productPrice, sellerID);

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("sellerId", sellerID);
    console.log(formData);

    try {
      await axios.post("http://localhost:3001/api/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="seller-homepage">
      <header className="header">
        <img src={logo} height={100} alt="Logo" className="logo mx-5" />
        <nav className="nav-links">
          <a href="/customerhomepage">Cart</a>
          <a href="/customerhomepage">Orders</a>
          <a href="/customerhomepage">Profile</a>
          <a href="/customerhomepage" onClick={handleLogout}>
            Logout
          </a>
        </nav>
      </header>
      <h1>Welcome Seller</h1>

      {/* form section to add a new product to the products table  */}
      <form className="add-product-form">
        <h2>Add a new product</h2>
        <label htmlFor="productName">Product Name</label>
        <input type="text" id="productName" name="productName" />
        <label htmlFor="productPrice">Product Price</label>
        <input type="text" id="productPrice" name="productPrice" />
        <button type="submit" onClick={addProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default SellerHomepage;
