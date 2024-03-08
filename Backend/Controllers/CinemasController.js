const CinemasModel = require("../Models/CinemasModel");

let GetAllCinemas = async (req, res, next) => {
  let cinemas = await CinemasModel.find({});
  res.status(200).send(cinemas);
};

module.exports = { GetAllCinemas };
