var express = require('express');
var router = express.Router();
const user = require('../models/user')

// get list of users
router.get('/', async (req, res, next) => {
  const users = await user.find();
  res.json(users)
});

module.exports = router;
