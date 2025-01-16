const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.get("/auth/google", authController.loginWithGoogle);
router.get(
  "/auth/google/callback",
  authController.googleAuthCallback,
  authController.redirectAfterLogin
);
router.get("/logout", authController.logout);

module.exports = router;
