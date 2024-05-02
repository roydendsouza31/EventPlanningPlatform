const express = require("express");
const router = express.Router();
const Seller = require("../models/seller");
const Testimonial = require("../models/testimonial");
const Product = require("../models/product");

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

// Route to get the top 5 service providers by rating and number of reviews
router.get("/gettopserviceproviders", async (req, res) => {
  try {
    const topServiceProviders = await Seller.aggregate([
      {
        $sort: { rating: -1, reviewsCount: -1 }, // Sort by rating in descending order and then by reviewsCount
      },
      {
        $limit: 3, // Limit to top 3 service providers
      },
    ]);
    res.status(200).json(topServiceProviders);
  } catch (error) {
    console.error("Error fetching top service providers:", error);
    res.status(500).json({ error: "Failed to fetch top service providers" });
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

//Route to get a particular service provider by id
router.get("/getserviceprovider/:id", async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    res.status(200).json(seller);
  } catch (error) {
    console.error("Error fetching service provider:", error);
    res.status(500).json({ error: "Failed to fetch service provider" });
  }
});

//Route to add item to customers cart
router.post("/addtocart", async (req, res) => {
  try {
    const { customerId, productID } = req.body;
    const customer = await Customer.findById(customerId);
    customer.cart.push(productID);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

//Route to add a product
router.post("/addproduct", async (req, res) => {
  try {
    const { name, price } = req.body;
    console.log(name, price);
    const product = await Product.create({ name, price });
    res.status(201).json(product);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

//Route to put image for product
router.put("/addproductimage", async (req, res) => {
  try {
    const { productId, image } = req.body;
    const product = await Product.findById(productId);
    product.image = image;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.error("Error adding image to product:", error);
    res.status(500).json({ error: "Failed to add image to product" });
  }
});

//Route to get a partiucal customer by email
router.get("/getcustomer/:email", async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.params.email });
    res.status(200).json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res.status(500).json({ error: "Failed to fetch customer" });
  }
});

module.exports = router;
