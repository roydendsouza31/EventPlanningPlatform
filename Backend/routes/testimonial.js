const express = require("express");
const router = express.Router();
const TestimonialService = require("../services/testimonial-service");

router.post("/createtestimonial", async (req, res) => {
  try {
    const { name, testimonial } = req.body;
    const response = await TestimonialService.save({ name, testimonial });
    res.status(201).json(response);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res.status(500).json({ error: "Failed to create testimonial" });
  }
});

// Route to get all testimonials
router.get("/gettestimonial", async (req, res) => {
  try {
    const testimonials = await TestimonialService.findAll();
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

module.exports = router;
