const express = require("express");
const router = express.Router();
const MoviesController= require("../Controllers/MoviesController")

router.get("/all",MoviesController.GetAllMovies)
router.post("/review-check",MoviesController.checkForUserReviews)
router.post("/add-review",MoviesController.PostReview)
router.post("/movie-name",MoviesController.GetMovieByName)
router.post("/reviews",MoviesController.GetMovieReviews)






module.exports = router;