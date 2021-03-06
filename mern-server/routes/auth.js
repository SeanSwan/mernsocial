const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");

router.post("/signup", signup);
router.post("/signup", signin);

module.exports = router;