const express = require("express");
const router = express.Router();
const { registeruser, loginuser } = require("../controllers/register");
router.post("/register", registeruser);
router.post("/login", loginuser);
router.get("/check-auth", authmiddleware, (req, res) => {});
module.exports = router;
