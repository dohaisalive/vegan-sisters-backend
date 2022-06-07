const connectDb = require("./database");
const express = require("express");
const categoriesRoutes = require("./api/categories/categories.routes");
const userRoutes = require("./api/users/users.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const cors = require("cors");

const app = express();
connectDb();
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
app.use(cors());

app.use("/categories", categoriesRoutes);
app.use(userRoutes);
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});
// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message || "Internal Server Error",
//     },
//   });
// });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
