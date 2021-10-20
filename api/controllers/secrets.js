const asyncHandler = require("../utils/asyncHandler");
const Secret = require("../models/Secret");
const ErrorResponse = require("../utils/ErrorResponse");

//Desc          //Get all secrets
//Route         // GET /api/secrets
//RequireAuth   //True
exports.getSecrets = asyncHandler(async (req, res, next) => {
    // const secrets = []
    const rawSecrets = Secret.find({})
        rawSecrets.sort("-createdAt");

    const secrets = await rawSecrets;

    if (secrets.length === 0) {
        return next(new ErrorResponse(200, "No Secrets", "No secrets in the Database"))
    }
    
    res.status(200).json({
    success: true,
    count: secrets.length,
    data: secrets,
  });
});

//Desc          //Create new secrete
//Route         // POST /api/secrets
//RequireAuth   //True
exports.createSecret = asyncHandler(async (req, res, next) => {
    const newSecret = await Secret.create(req.body)
    
    res.status(200).json({
    success: true,
    data: newSecret,
  });
});

//Desc          //Get single secret
//Route         // GET /api/secrets/:id
//RequireAuth   //True
exports.getSecret = asyncHandler(async (req, res, next) => {
    const secret = await Secret.findById(req.params.id)
    if (!secret) {
        return next(new ErrorResponse(404, `No Secret found`, `No secret in DB with id of ${req.params.id}`))
    }
    res.status(200).json({
    success: true,
    data: secret,
  });
});

//Desc          //Update secret
//Route         // PUT /api/secrets/:id
//RequireAuth   //True
exports.updateSecret = asyncHandler(async (req, res, next) => {
    const secret = await Secret.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!secret) {
        return next(new ErrorResponse(404, `Could not update secret`, `Secret with id: ${req.params.id} not found in DB`))
    }
    res.status(200).json({
    success: true,
    data: secret,
  });
});

//Desc          //Delete secret
//Route         // DElETe /api/secrets/:id
//RequireAuth   //True
exports.deleteSecret = asyncHandler(async (req, res, next) => {
    const secret = await Secret.findByIdAndDelete(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!secret) {
        return next(new ErrorResponse(404, `Could not update secret`, `Secret with id: ${req.params.id} not found in DB`))
    }
    res.status(200).json({
    success: true,
    data: secret,
  });
});