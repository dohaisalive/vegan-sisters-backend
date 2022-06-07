const express = require("express");

const router = express.Router();

const { getRecipes} = require("./recipes.controllers");

router.get("/recipes", getRecipes);

module.exports = router;
