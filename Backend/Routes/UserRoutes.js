const express = require("express");
const router = express.Router();
const UsersController= require("../Controllers/UsersController")


router.get("/cart",UsersController.GetUserCart)
router.get("/profile",UsersController.GetUserData)
router.post("/delete-movie",UsersController.DeleteMovieFromCart)
router.post("/add-favourite",UsersController.AddToFavourites)
router.post("/delete-favourite",UsersController.RemoveFromFavourites)
router.post("/check-favourite",UsersController.checkIfFavourite)




module.exports = router;
