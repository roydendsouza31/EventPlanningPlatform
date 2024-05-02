const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  image: { type: Buffer },
  price: { type: Number },
  selleremail: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
