const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");

//Desc          //Create new user
//Route         // POST user/register
//RequireAuth   //False
exports.createUser = asyncHandler(async (req, res, next) => {
    User.create(req.body);
    res.redirect("/")
    res.send("Thanks for registering with ");
});

//Desc          //Login in user
//Route         // POST user/login
//RequireAuth   //False
exports.loginUser = asyncHandler(async (req, res, next) => {
    req.body.email
    bcrypt.compare(req, hash, function(err, result) {
    // result == true
});
});
//Update userInfo
//Delete user