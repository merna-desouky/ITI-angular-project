const mongoose = require("mongoose");
const CinemasSchema = new mongoose.Schema({
  name: { type: String },
  id: { type: Number },
  seats: [],
});
module.exports = mongoose.model("Cinemas", CinemasSchema);
