const express = require("express");
const {postData,deleteData} = require("../controller/dataController");

const router = express.Router();

router.post("/", postData);

router.delete("/:id", deleteData);

module.exports = router;