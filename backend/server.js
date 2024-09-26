const express = require("express");
const app = express();
const cors = require("cors");
const cookie = require("cookie-parser");
const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const registeruser = require("./routes/auth-user");
dotenv.config({ path: "./config.env" });
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
  credentials: true, // Allow credentials (cookies)
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers};
};
app.use(express.json());

app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api", registeruser);

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
