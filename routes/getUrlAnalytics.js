const express = require("express");

const getUrlAnalytics = require("../controller/getUrlAnalytics");


const router = express.Router();

router.get("/api/analytics/:alias", getUrlAnalytics.getUrlAnalytics);

module.exports = router;
