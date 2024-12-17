var express = require('express');
var router = express.Router();
const user = require('../models/user');
const { handleSignup, handleLogin } = require('../middleware/user');

// get list of users
router.get('/', async (req, res, next) => {
  const users = await user.find();
  res.json(users)
});

router.post('/signup',handleSignup, (req,res)=>{
  res.status(200)
  res.json({message : "User created successfully, please login..."})
})


router.post('/login',handleLogin, (req,res)=>{
  res.status(200)
  res.json({message : "User logged in successfully"})
})

module.exports = router;
