const express = require("express");
const slugify = require("slugify");

const router = express.Router();

const {
  getRestaurants,
  restaurantCreate,
} = require("./restaurants.controllers");

router.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.slug = slugify(req.body.name);
  }
  next();
});

router.get("/restaurants", getRestaurants);
router.post("/restaurants", restaurantCreate);
// router.get("/recipes/:userId", getUserRecipes);

module.exports = router;
