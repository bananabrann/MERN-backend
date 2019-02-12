const express = require("express");
const router = express.Router();
const showController = require("../controllers/show");

console.log("routes/applications: arrived")

router.get("/", showController.index);
// router.post("/", showController.create);
// router.put("/", showController.update);
// router.delete("/", showController.destroy);

module.exports = router;
