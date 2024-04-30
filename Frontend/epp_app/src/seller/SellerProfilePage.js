import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SellerProfilePage.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const SellerProfilePage = () => {
  let navigate = useNavigate();
  const [sellerData, setSellerData] = useState({
    companyName: "",
    sellerInfo: "",
    contactDetails: "",
    ratings: [],
    reviews: [],
    uploadedPhotos: [],
    address: "", // New field for company address
    phoneNumber: "", // New field for phone number
    socialMediaHandles: {
      // Change from [] to {}
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  const [editedSellerInfo, setEditedSellerInfo] = useState({
    companyName: "",
    sellerInfo: "",
    contactDetails: "",
    address: "", // New field for company address
    phoneNumber: "", // New field for phone number
    socialMediaHandles: [], // New field for social media handles
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

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/seller-profile",
        editedSellerInfo
      );
      setSellerData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating seller information:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSellerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // const handlePhoto = async (e) => {
  //   const photo = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("photo", photo);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/seller-profile/photos",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     setSellerData((prevData) => ({
  //       ...prevData,
  //       logoUrl: response.data.logoUrl, // Update logoUrl with the response from the server
  //     }));
  //   } catch (error) {
  //     console.error("Error uploading photo:", error);
  //   }
  // };

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
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            // onChange={handlePhoto}
          />
        </div>
        <div className="seller-info">
          {isEditing ? (
            <form onSubmit={handleEditFormSubmit}>
              {/* Input fields for editing company information */}
              <br />
              <label>Comapany name:</label>
              <input
                type="text"
                name="companyName"
                value={editedSellerInfo.companyName}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>Comapany Info:</label>
              <textarea
                name="sellerInfo"
                value={editedSellerInfo.sellerInfo}
                onChange={handleInputChange}
                required
              ></textarea>
              {/* Additional fields for editing contact details */}
              <br />
              <label>Contact details:</label>
              <br />
              <label>Comapany address:</label>
              <input
                type="text"
                name="address"
                value={editedSellerInfo.address}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>phone number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={editedSellerInfo.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>facebook:</label>
              <input
                type="text"
                name="facebook"
                value={editedSellerInfo.socialMediaHandles.facebook || ""}
                onChange={handleInputChange}
                required
              />

              <br />
              <label>twitter:</label>
              <input
                type="text"
                name="twitter"
                value={editedSellerInfo.socialMediaHandles.twitter || ""}
                onChange={handleInputChange}
                required
              />
              <br />
              <label>Instagram:</label>
              <input
                type="text"
                name="instagram"
                value={editedSellerInfo.socialMediaHandles.instagram || ""}
                onChange={handleInputChange}
                required
              />
            </form>
          ) : (
            <>
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
                  Object.keys(sellerData.socialMediaHandles).map(
                    (key, index) => (
                      <span key={index}>
                        {key}: {sellerData.socialMediaHandles[key]}
                        {index <
                          Object.keys(sellerData.socialMediaHandles).length -
                            1 && " "}
                        <br />
                      </span>
                    )
                  )}
              </p>
            </>
          )}
        </div>
        {isEditing ? (
          <button onClick={handleEditFormSubmit}>Save</button>
        ) : (
          <button onClick={handleEditButtonClick}>Edit</button>
        )}
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

export default SellerProfilePage;
