import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  return res.status(201).json({ message: "Signup successful" });
});

router.post("/login", (req, res) => {
  return res.json({ message: "Login successful" });
});

export default router;
