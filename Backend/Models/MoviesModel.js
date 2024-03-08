const mongoose = require("mongoose");
const MoviesSchema = new mongoose.Schema({
  Title: { type: String },
  Year: { type: String },
  Rated: { type: String },
  Genre: { type: String },
  Language: { type: String },
  Poster: { type: String },
  Ratings: { type: Array },
  Reviews: { type: Array },
});
module.exports = mongoose.model("Movies", MoviesSchema);
