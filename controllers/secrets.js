const asyncHandler = require("../utils/asyncHandler");


exports.getSecrets = asyncHandler(async (req, res, next) => {
    res.render("secrets")
});

exports.addNewSecret = asyncHandler(async (req, res, next) => {
    res.render("newsecret")
});
