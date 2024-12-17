var express = require("express");
var router = express.Router();
const user = require("../models/user");
const { handleSignup, handleLogin } = require("../middleware/user");

// get list of users
router.get("/all", async (req, res, next) => {

  if(req.quert.admin === true)
  {
    const users = await user.find();
    res.json(users);
    return
  }
  res.status(404)
  res.json({message: "users can only be viewed by admin"})
});

router.post("/signup", handleSignup, (_req, res) => {
  res.status(200);
  res.json({ message: "User created successfully, please login..." });
});

router.post("/login", handleLogin, (_req, res) => {
  res.status(200);
  res.json({ message: "User logged in successfully" });
});

module.exports = router;
