const express = require("express");
const router = express.Router();
const DashboardController= require("../Controllers/DashboardController")


router.get("/report",DashboardController.GetDashboardData)






module.exports = router;
