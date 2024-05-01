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
//const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phoneNumber: String,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

// Routes
app.get("/api/customer", async (req, res) => {
  try {
    const customer = await Customer.findOne();
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/customer", async (req, res) => {
  try {
    const updatedCustomerData = req.body;
    const customerData = await Customer.findOneAndUpdate(
      {},
      updatedCustomerData,
      { new: true }
    );
    res.json(customerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// app.put("/api/customer/:customerId", async (req, res) => {
//   const customerId = req.params.customerId;
//   try {
//     const customer = await Customer.findById(customerId);
//     if (customer) {
//       customer.set(req.body);
//       await customer.save();
//       res.json({ message: "Customer data updated successfully" });
//     } else {
//       res.status(404).json({ message: "Customer not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//***********calender */
// Create a schema for events
// Create a schema for events
const eventSchema = new mongoose.Schema({
  title: String,
  start: Date, // Include start time field in the schema
});

// Create a model for events
const Event = mongoose.model("Event", eventSchema);

// Connect to MongoDB

// Check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Get all events
app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add a new event
app.post("/api/events", async (req, res) => {
  try {
    // Extract title and start date from the request body
    const { title, start } = req.body;

    // Create a new event instance
    const event = new Event({ title, start });

    // Save the new event to the database
    await event.save();

    // Send a success response
    res.status(201).json(event);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(400).json({ message: error.message });
  }
});

// Update an event
app.put("/api/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start } = req.body;
    const event = await Event.findByIdAndUpdate(
      id,
      { title, start },
      { new: true }
    );
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an event
app.delete("/api/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
