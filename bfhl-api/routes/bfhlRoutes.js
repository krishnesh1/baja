const express = require("express");
const router = express.Router();

const { handleBFHL, healthCheck } = require("../controllers/bfhlController");

router.get("/health", healthCheck);
router.post("/bfhl", handleBFHL);

module.exports = router;
