const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/show/:id", require("./show.js"));

module.exports = router;
