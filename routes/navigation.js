const express = require("express");
const router = express.Router();
const {renderHome} = require("../controllers/navigation")

router.route("/").get(renderHome)

module.exports = router;