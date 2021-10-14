const asyncHandler = require("../../utils/asyncHandler");
const Secret = require("../models/Secret");

exports.getSecrets = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, body: "I love my life", author: "admin" },
      { id: 2, body: "I love myself", author: "admin" },
      { id: 3, body: "I love my me", author: "admin" },
    ],
  });
});
