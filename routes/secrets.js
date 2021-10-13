const express = require("express");
const router = express.Router()
const {addNewSecret, getSecrets, getSecret,updateSecret,deleteSecret} = require("../controllers/secrets")

router
    .route("/")
    .get(getSecrets)
    .post(addNewSecret)
module.exports = router;
