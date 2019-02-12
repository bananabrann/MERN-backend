const express = require("express");
const router = express.Router();

console.log("routes/switchboard: arrived");

router.use("/", require("./application.js"));
router.use("/show", require("./show.js"));
router.use("/create", require("./create.js"))

module.exports = router;
