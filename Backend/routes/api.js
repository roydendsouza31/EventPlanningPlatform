const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");
const Testimonial = require("../models/testimonial");

// Route to get all service providers of a specific service type
router.get("/getallserviceproviders/:servicetype", async (req, res) => {
  try {
    const serviceType = req.params.servicetype;
    const serviceProviders = await Seller.find({ typeofservice: serviceType });
    res.status(200).json(serviceProviders);
  } catch (error) {
    console.error("Error fetching service providers:", error);
    res.status(500).json({ error: "Failed to fetch service providers" });
  }
});

// Route to get all testimonials
router.get("/gettestimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

// Route to create a testimonial
router.post("/createtestimonial", async (req, res) => {
  try {
    const { name, testimonial } = req.body;
    const response = await Testimonial.create({ name, testimonial });
    res.status(201).json(response);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res.status(500).json({ error: "Failed to create testimonial" });
  }
});

module.exports = router;
