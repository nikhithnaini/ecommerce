const dotenv = require("dotenv");
const app = express();
const Product = require("./databse");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Successfully connected to MongoDB Atlas");
  });
const newProduct = new Product({
  name: "iPhone 14",
  price: 999,
  //   description: "The latest iPhone model with A15 chip",
  //   category: "Electronics",
  //   stock: 100,
});
newProduct.save();
