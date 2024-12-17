var user = require("../models/user");

const handleSignup = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userToSearch = await user.findOne({ username: username });
    if (!userToSearch) {
      await user.create({ username: username, password: password });
      next();
    } else {
      res.status(404);
      res.json({ message: "user already exists! please login" });
    }
  } catch (e) {
    console.log(e)
    res.status(500);
    res.json({ message: "error occured during signup, please try again..." });
  }
};

const handleLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userToSearch = await user.findOne({
      username: username,
      password: password,
    });
    if (!userToSearch) {
      res.status(404);
      res.json({ message: "User not forund, please check your credentials" });
    } else {
      next();
    }
  } catch (e) {
    res.status(500);
    res.json({ message: "error occured during signup, please try again..." });
  }
};

module.exports = { handleLogin, handleSignup };
