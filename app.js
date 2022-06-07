const connectDb = require("./database");
const express = require("express");
const categoriesRoutes = require("./categories/categories.routes");
//const cors = require("cors");

const app = express();
connectDb();
app.use(express.json());
app.use(cors());

app.use("/categories", categoriesRoutes);
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
