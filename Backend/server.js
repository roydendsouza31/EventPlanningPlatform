const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/WebDev", {
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
app.get("/api/testimonial", async (req, res) => {
  try {
    const testimonial = await Testimonial.find();
    res.json(testimonial);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});