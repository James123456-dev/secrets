const asyncHandler = require("../utils/asyncHandler");
const Secret = require("../api/models/Secret");

exports.getSecrets = asyncHandler(async (req, res, next) => {
  res.render("secrets");
});

exports.addNewSecret = asyncHandler(async (req, res, next) => {
  Secret.create(req.body);
  res.redirect("/secrets");
});
