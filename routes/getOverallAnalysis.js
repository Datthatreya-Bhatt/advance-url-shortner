const express = require("express");

const getOverallAnalysis = require("../controller/getOverallAnalysis");


const router = express.Router();

router.get("/api/shorten/:alias", getOverallAnalysis.getOverallAnalysis);

module.exports = router;
