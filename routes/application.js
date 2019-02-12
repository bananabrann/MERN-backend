const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/application");

console.log("routes/application: arrived");

router.get("/", applicationController.index);

module.exports = router;
