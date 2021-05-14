const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map((user) => User.toResponse(user)));
});

router.route('/us').get(async (req, res) => {
  res.send('users');
});

module.exports = router;
