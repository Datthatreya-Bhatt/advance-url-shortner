const express = require("express");

const getTopicBasedAnalysis = require("../controller/getTopicBasedAnalysis");


const router = express.Router();

router.get("/api/analytics/:alias", getTopicBasedAnalysis.getTopicBasedAnalysis);

module.exports = router;
