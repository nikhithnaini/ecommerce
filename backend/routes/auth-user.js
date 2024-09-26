const express = require("express");
const router = express.Router();
const routeuser = require("../controllers/register");
router.post("/register", routeuser);
module.exports = router;
