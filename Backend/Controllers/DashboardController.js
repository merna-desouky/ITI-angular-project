const DashboardModel = require("../Models/DashboardModel");
const AuthModel = require("../Models/AuthModel");
const MoviesModel = require("../Models/MoviesModel");

let addUser = async () => {
  let dashb = await DashboardModel.findOne({}, { usersCount: 1 });
  dashb.usersCount = dashb.usersCount + 1;
  await dashb.save();
  return dashb.usersCount;
};

let addReview = async (movieName) => {
  await DashboardModel.updateOne(
    { "movieStatistics.Title": movieName },
    { $inc: { "movieStatistics.$.reviewsNum": 1, totalReview: 1 } }
  );
};

let updateSales = async (movieName) => {
  await DashboardModel.updateOne(
    { "movieStatistics.Title": movieName },
    {
      $inc: {
        "movieStatistics.$.soldTickets": 1,
        totalSales: 1,
      },
    }
  );
};

let GetDashboardData = async (req, res, next) => {
  let dashb = await DashboardModel.findOne({});

  res.send({
    dashb,
  });
};

module.exports = {
  GetDashboardData,
  addUser,
  addReview,
  updateSales,
};
