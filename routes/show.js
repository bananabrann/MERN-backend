const express = require("express");
const router = express.Router();
const showController = require("../controllers/show");

router.get("/", showController.index);
router.post("/", showController.create);
router.put("/", showController.update);
router.delete("/", showController.destroy);

module.exports = router;
