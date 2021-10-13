const asyncHandler = require("../../utils/asyncHandler");
const Secret = require('../models/Secret')


exports.getSecrets = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "request successful"
    });
});


