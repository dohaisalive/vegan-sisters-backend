const Restaurant = require("../../models/Restaurant");
const User = require("../../models/User");

exports.getRestaurants = async (req, res) => {
  try {
    // $push: { ingredients: ingredient._id }

    const restaurants = await Restaurant.find();

    res.status(201).json(restaurants);
    // console.log("Hello this is getAll");
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

// exports.getUserRecipes = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     // console.log(userId)
//       const foundUser = await User.findById(userId).populate("recipes")
//       console.log(foundUser)
//       res.status(201).json(foundUser);
//       // console.log("Hello this is getAll");
//     }
//     catch (err) {
//     res.status(500).json("Server Error");
//   }
// };

exports.restaurantCreate = async (req, res, next) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    next(error);
  }
};

// exports.getUserRecipes = async (req, res) => {
//     try {
//       //Somewhere in some other function maybe ingredients
//         const newUser = await User.findById(req.user._id)

//         console.log("Hello this is getUser");
//       }
//       catch (err) {
//       res.status(500).json("Server Error");
//     }
// };
