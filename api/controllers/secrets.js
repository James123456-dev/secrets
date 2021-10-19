const asyncHandler = require("../../utils/asyncHandler");
const Secret = require("../models/Secret");

exports.getSecrets = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, body: "Post one", author: "admin" },
      { id: 2, body: "Post two", author: "admin" },
      { id: 3, body: "Post three", author: "admin" },
    ],
  });
});
