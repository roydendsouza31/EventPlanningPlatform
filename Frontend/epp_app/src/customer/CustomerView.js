import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./SellerProfilePage.css";
import { useNavigate } from "react-router-dom";

const CustomerView = () => {
  let navigate = useNavigate();

  const [sellerData, setSellerData] = useState({
    companyName: "",
    sellerInfo: "",
    contactDetails: "",
    ratings: [],
    reviews: [],
    uploadedPhotos: [],
    address: "",
    phoneNumber: "",
    socialMediaHandles: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  const [editedSellerInfo, setEditedSellerInfo] = useState({
    companyName: "",
    sellerInfo: "",
    contactDetails: "",
    address: "",
    phoneNumber: "",
    socialMediaHandles: [],
  });

  const [isEditing, setIsEditing] = useState(false);

  const fetchSellerData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/seller-profile"
      );
      setSellerData(response.data);
      setEditedSellerInfo(response.data);
    } catch (error) {
      console.error("Error fetching seller data:", error);
    }
  };

  useEffect(() => {
    fetchSellerData();
  }, []);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="seller">
      <div className="seller-profile-container">
        <button className="back" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="seller-header">
          <div>
            <img
              src={sellerData.logoUrl || "p.png"}
              className="avatar"
              alt="logo"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h1>{sellerData.companyName}</h1>
          </div>
        </div>
        <div className="seller-info">
          <h2>Company Information</h2>
          <p>{sellerData.sellerInfo}</p>
          <h2>Contact Details</h2>
          <p>
            <strong>Address:</strong> {sellerData.address}
            <br />
            <strong>Phone Number:</strong> {sellerData.phoneNumber}
            <br />
            <strong>Social Media:</strong>{" "}
            {sellerData.socialMediaHandles &&
              Object.keys(sellerData.socialMediaHandles).map((key, index) => (
                <span key={index}>
                  {key}: {sellerData.socialMediaHandles[key]}
                  {index <
                    Object.keys(sellerData.socialMediaHandles).length - 1 &&
                    " "}
                  <br />
                </span>
              ))}
          </p>
        </div>
      </div>
      <div className="seller-details">
        <div className="seller-ratings">
          <h2>Ratings</h2>
          <ul>
            {sellerData.ratings.map((rating, index) => (
              <li key={index}>{rating}</li>
            ))}
          </ul>
        </div>
        <div className="seller-reviews">
          <h2>Reviews</h2>
          <ul>
            {sellerData.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
        <div className="seller-photos">
          <h2>Uploaded Photos</h2>
          <ul>
            {sellerData.uploadedPhotos.map((photo, index) => (
              <li key={index}>
                <img src={photo} alt="uploaded images" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
