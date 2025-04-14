const express = require("express");
const postData = require("../controller/dataController");

const router = express.Router();

router.post("/", postData);

module.exports = router;