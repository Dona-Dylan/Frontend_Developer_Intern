const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to the dashboard",
    user: req.user, // comes from JWT
  });
});

module.exports = router;
