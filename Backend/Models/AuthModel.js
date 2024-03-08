const validator = require("validator");
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 30 },
  email: {
    type: String,
    required: true,
  },
  password: { type: String, minLength: 5, required: true },
  isAdmin: { type: Boolean, default: false },
  purchased: [],
  favourite: [],
  cart: [],
});
module.exports = mongoose.model("Users", usersSchema);
