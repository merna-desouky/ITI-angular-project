const express = require("express");
const router = express.Router();
const CinemasController= require("../Controllers/CinemasController")


router.get("/all",CinemasController.GetAllCinemas)





module.exports = router;