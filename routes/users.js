const express = require("express");
const router = express.Router();
const {
  getRegisterationPage,
  createNewUser,
  getLoginPage,
  logoutUser,
  loginInUser,
} = require("../controllers/users");

router.route("/register").get(getRegisterationPage).post(createNewUser);
router.route("/login").get(getLoginPage).post(loginInUser);

module.exports = router;
