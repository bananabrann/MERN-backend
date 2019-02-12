const express = require("express");
const router = express.Router();
const createController = require("../controllers/show")

router.post("/", createController.create);

module.exports = router;