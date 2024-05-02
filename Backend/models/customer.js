const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  surname: { type: String, required: true, minlength: 1 },
  email: { type: String, required: true, minlength: 2 },
  password: { type: String, required: true, minlength: 3 },
  image: { type: Buffer },
});

module.exports = mongoose.model("Customer", CustomerSchema);