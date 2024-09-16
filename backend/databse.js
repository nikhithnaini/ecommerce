const mongoose = require("mongoose");
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is empty"],
  },
  price: {
    type: Number,
  },
});
const Product = mongoose.model("Product", tourSchema);
module.exports = Product;
