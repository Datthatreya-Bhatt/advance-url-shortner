const passport = require("passport");

exports.loginWithGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

exports.googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "/login",
  session: true,
});

exports.redirectAfterLogin = (req, res) => {
  res.send({ message: "Login successful", user: req.user });
};

exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send({ error: "Failed to log out" });
    res.send({ message: "Logout successful" });
  });
};
