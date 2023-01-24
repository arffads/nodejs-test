const express = require("express");

const router = express.Router();

router.get("/");
router.get("/:id");
router.post("/");
router.patch("/");
router.delete("/");

module.exports = router;