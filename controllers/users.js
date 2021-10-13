const asyncHandler = require("../utils/asyncHandler");
const User = require("../api/models/User");

//Desc          //Create new user
//Route         // POST user/register
//RequireAuth   //False
exports.getRegisterationPage = asyncHandler(async (req, res, next) => {
    res.render("register")
});
//Desc          //Login in user
//Route         // POST user/login
//RequireAuth   //False
exports.getLoginPage = asyncHandler(async (req, res, next) => {
    res.render("login")
});

// //Desc          //Create new user
// //Route         // POST user/register
// //RequireAuth   //False
exports.creatNewUser = asyncHandler(async (req, res, next) => {
   const newUser = await User.create(req.body);
    res.redirect("/secrets", {user: newUser})
});


// //Desc          //Login in user
// //Route         // POST user/login
// //RequireAuth   //False
exports.loginInUser = asyncHandler(async (req, res, next) => {
    let user;
    //Check if user exists
    user = await User.find({name: req.body.useroremail})
   if(!user){
       user = await User.find({email: req.body.useroremail})
   }
   else {
       res.render("login", {error: "Invalid username or password"})
       return;
   }
   res.redirect("/secrets", {user: user})
});
// //Desc          //Login in user
// //Route         // POST user/login
// //RequireAuth   //False
// exports.logoutUser = asyncHandler(async (req, res, next) => {
    
// });
