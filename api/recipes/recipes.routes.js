const express = require("express");
const slugify = require("slugify");

const router = express.Router();

const { getRecipes, recipeCreate } = require("./recipes.controllers");

router.use((req, res, next) => {
  console.log(req.body);
  // if (req.method === "POST") {
  //   req.body.slug = slugify(req.body.name);
  // }
  next();
});

router.get("/recipes", getRecipes);
router.post("/recipes", recipeCreate);
// router.get("/recipes/:userId", getUserRecipes);

module.exports = router;
