const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
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
  const { username, password } = req.body;
  const currentuser = await User.findOne({ username });

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
  } else {
  }
};
module.exports = registeruser;
