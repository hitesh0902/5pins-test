const express = require("express");
const passport = require("passport");
const router = express.Router();

const CLIENT_HOME_PAGE_URL = "http://localhost:3000/";

// GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/",
  })
);

// GET auth/login/success
router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.json({
      message: "User Authenticated",
      user: req.user,
    });
  } else
    res.status(400).json({
      message: "User Not Authenticated",
      user: null,
    });
});

// GET /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL + "login");
});

module.exports = router;
