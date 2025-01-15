const express = require("express");
const rateLimit = require("express-rate-limit");

const createShortURL = require("../controller/createShortUrlRoute");


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 10 requests per windowMs
  message: {
    status: 429,
    error: "Too many requests. Please try again after some time.",
  },
});

const router = express.Router();

router.post("/api/shorten", limiter, createShortURL.createShortUrl);

module.exports = router;
