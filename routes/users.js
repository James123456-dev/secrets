const express = require("express");
const router = express.Router();
const {getRegisterationPage,creatNewUser,getLoginPage,logoutUser, loginInUser} = require("../controllers/users")


router
    .route("/register")
    .get(getRegisterationPage)
    .post(creatNewUser)
router
    .route("/login")
    .get(getLoginPage)
  
module.exports = router;