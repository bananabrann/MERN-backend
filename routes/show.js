const express = require("express");
const router = express.Router();
const showController = require("../controllers/show");

console.log("routes/applications: arrived")

router.get("/:id", showController.index)

// router.post("/", showController.create);
router.put("/:id", showController.update);
router.delete("/:id", showController.destroy);

module.exports = router;
