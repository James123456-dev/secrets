const asyncHandler = require("../utils/asyncHandler");
//Desc          //Create new user
//Route         // POST user/register
//RequireAuth   //False
exports.createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  res.send("Thanks for registering with ");
});

//Desc          //Login in user
//Route         // POST user/login
//RequireAuth   //False
exports.loginUser = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  res.send("Thanks for registering with ");
});

//Update userInfo
//Delete user
