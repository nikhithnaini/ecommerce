const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const registeruser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });
    const hashpassword = await bcrypt.hash(password, 12);
    const newuser = new User({
      username,
      email,
      password: hashpassword,
    });
    await newuser.save();
    console.log("user added to db");
    res.status(200).json({
      status: "success",
      message: "user created successfully",
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: "some error occured",
    });
  }
};

//login

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const currentuser = await User.findOne({ email });
    console.log(currentuser);
    if (!currentuser) {
      res.status(400).json({
        status: "error",
        message: "user didn't exist",
      });
    }

    const checkpassword = await bcrypt.compare(password, currentuser.password);
    if (!checkpassword) {
      res.status(400).json({
        status: "error",
        message: "credentials do not match",
      });

      // Generate a 32-byte random secret key (can adjust size as needed)
      const secretKey = crypto.randomBytes(32).toString("hex");
      console.log("Generated Secret Key:", secretKey);
      const token = jwt.sign(
        { user: currentuser.username, email: currentuser.email },
        secretKey,
        { expiresIn: "60m" }
      );
    } else {
      res.status(200).json({
        status: "sucess",
        message: "Logged in successfull",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "credentials not matched",
    });
  }
};

const authmiddleware = async (req, res, next) => {};
module.exports = { registeruser, loginuser };
