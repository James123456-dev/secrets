const express = require("express");
const router = express.Router();
const {getSecrets} = require("../controllers/secrets");

router.route("/").get(getSecrets)

module.exports = router;