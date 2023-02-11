const { model, Schema } = require("mongoose");

const RestaurantSchema = new Schema({
  name: String,
  //   logo: String,
  veg_type: String,
  category: String,
  cuisine: String,
  delivery_service: String,
  instagram_link: String, //probably nooo
  dine_in: Boolean,
  hours: String,
  phone_number: String, //????
  location: String, //maybe x y coordinates?
  vegan_dishes: Number,
  to_order_link: String, //??

  slug: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = model("Restaurant", RestaurantSchema);
