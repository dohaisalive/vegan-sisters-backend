const { model, Schema } = require("mongoose");

const BlogPostSchema = new Schema({
  title: String,
  image: String,
  category: String,
  slug: String,
  steps: String,
  ttp: String,
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = model("BlogPost", BlogPostSchema);
