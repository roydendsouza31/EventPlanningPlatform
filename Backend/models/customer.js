const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  email: { type: String, required: true, minlength: 2 },
  name: { type: String, required: true, minlength: 1 },
  surname: { type: String, required: true, minlength: 1 },
  password: { type: String, required: true, minlength: 3 },
  image: { type: String, default: "" },
});

module.exports = mongoose.model("Customer", CustomerSchema);
