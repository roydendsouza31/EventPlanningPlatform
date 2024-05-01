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
//seller schema
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
//***********************

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/WebDev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  profilePic: {
    data: Buffer, // Store image data as a Buffer
    contentType: String, // Store content type of the image
  },
  review: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Route to fetch testimonials
app.get("/api/testimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//****************customer */

// MongoDB connection

// Customer Model
const Customer = mongoose.model("Customer", {
  name: String,
  email: String,
  address: String,
  phoneNumber: String,
});

// Routes
app.get("/api/customer", async (req, res) => {
  try {
    const customer = await Customer.findOne();
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/customer/:customerId", async (req, res) => {
  const customerId = req.params.customerId;
  try {
    const customer = await Customer.findById(customerId);
    if (customer) {
      customer.set(req.body);
      await customer.save();
      res.json({ message: "Customer data updated successfully" });
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//***********calender */

app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/events", async (req, res) => {
  try {
    const { title, start } = req.body;
    const event = new Event({ title, start });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
