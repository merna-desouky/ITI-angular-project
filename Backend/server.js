const express = require("express");
const app = express();
const PORT = process.env.PORT || 2024;

const cors = require("cors");

const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/Angular";
mongoose.connect(DB_URL, { autoIndex: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const AuthRoutes = require("./Routes/AuthRoutes");
const UsersRoutes = require("./Routes/UserRoutes");
const CinemasRoutes = require("./Routes/CinemasRoutes");
const MoviesRoutes = require("./Routes/MoviesRoutes");
const ReservationRoutes = require("./Routes/ReservationRoutes");
const DashboardRoutes = require("./Routes/DashboardRoutes");

app.use("/auth", AuthRoutes);
app.use("/cinemas", CinemasRoutes);
app.use("/movies", MoviesRoutes);
app.use("/reserve", ReservationRoutes);
app.use("/user", UsersRoutes);
app.use("/dashboard", DashboardRoutes);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
