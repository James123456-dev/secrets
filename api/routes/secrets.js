const express = require("express");
const router = express.Router()
const {createSecret, getSecrets, updateSecret,deleteSecret,getSecret} = require("../controllers/secrets")

router
    .route("/").get(getSecrets).post(createSecret);
router
    .route("/:id").get(getSecret).put(updateSecret).delete(deleteSecret)
module.exports = router;
