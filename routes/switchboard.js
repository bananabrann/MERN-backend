const express = require("express");
const router = express.Router();

console.log("routes/switchboard: arrived");
router.use("/", require("./application.js"));
router.use("/show/:id", require("./show.js"));

module.exports = router;
