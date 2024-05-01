const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  surname: { type: String, required: true, minlength: 1 },
  email: { type: String, required: true, minlength: 2 },
  password: { type: String, required: true, minlength: 3 },
  image: { type: Buffer },
  address: { type: String, default: "" },
  phone: { type: String, default: "" },
  typeofservice: { type: String, default: "" },
  companyname: { type: String, default: "" },
  companyemail: { type: String, default: "" },
  officephone: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  reviews: { type: Array, default: [] },
  photogallery: { type: Array, default: [] },
});

module.exports = mongoose.model("Seller", SellerSchema);
