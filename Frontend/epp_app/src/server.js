const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/sellerDB");

const sellerSchema = new mongoose.Schema({
  companyName: String,
  sellerInfo: String,
  contactDetails: String,
  ratings: [Number],
  reviews: [String],
  uploadedPhotos: [String],
  logoUrl: String,
  address: String,
  phoneNumber: String,
  socialMediaHandles: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
});

const Seller = mongoose.model("Seller", sellerSchema);

app.get("/api/seller-profile", async (req, res) => {
  try {
    const sellerData = await Seller.findOne();
    res.json(sellerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/seller-profile", async (req, res) => {
  try {
    const updatedSellerData = req.body;
    const sellerData = await Seller.findOneAndUpdate({}, updatedSellerData, {
      new: true,
    });
    res.json(sellerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/seller-profile/photos", async (req, res) => {
  try {
    const { photo } = req.body;
    const sellerData = await Seller.findOne();
    sellerData.uploadedPhotos.push(photo);
    await sellerData.save();
    res.json(sellerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
