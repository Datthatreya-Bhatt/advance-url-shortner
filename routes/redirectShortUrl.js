const express = require("express");

const redirectShortUrl = require("../controller/redirectShortUrl");


const router = express.Router();

router.get("/api/shorten/:alias", redirectShortUrl.redirectShortUrl);

module.exports = router;
