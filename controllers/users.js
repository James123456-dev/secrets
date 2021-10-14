const asyncHandler = require("../utils/asyncHandler");
const User = require("../api/models/User");
const bcrypt = require("bcryptjs");

//Desc          //Load registration page
//Route         // GET user/register
//RequireAuth   //False
exports.getRegisterationPage = asyncHandler(async (req, res, next) => {
  res.render("register");
});
//Desc          //Load login page
//Route         // GET user/login
//RequireAuth   //False
exports.getLoginPage = asyncHandler(async (req, res, next) => {
  res.render("login", { error: "" });
});
//Desc          //Create new user
//Route         // POST user/register
//RequireAuth   //False
exports.createNewUser = asyncHandler(async (req, res, next) => {
  let newUser = await User.create(req.body);
  res.render("secrets", {
    data: {
      userName: newUser.userName,
      email: newUser.email,
    },
  });
});
//Desc          //Login in user
//Route         // POST user/login
//RequireAuth   //False
exports.loginInUser = asyncHandler(async (req, res, next) => {

  let user;
  //Check if user exists
  user =
    (await User.findOne({ userName: req.body.useroremail })) ||
    (await User.findOne({ email: req.body.useroremail }));
  if (!user) {
    res.render("home", { error: "Invalid username or password" });
    return;
  }
  //Check password
  const isPasswordMatch = await bcrypt.compare(
    req.body.password,
    user.password
  );
  isPasswordMatch
    ? res.render("secrets", { data: user })
    : res.render("home", { error: "Invalid username or password" });
});

