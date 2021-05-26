const router = require('express').Router();

const usersService = require('./user.service');
const taskDB = require('../tasks/tasks.memory.repository');

// Get all users

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users);
});

// Get user by id

router.route('/:userId').get(async (req, res) => {
  try {
    const userById = await usersService.getUserbyId(req.params.userId);
    res.status(200).json(userById);
  } catch (error) {
    res.status(404).send('User isn\'t found');
  }
});

// Create user

router.route('/').post(async (req, res) => {
  const newUser = await usersService.addUser(req.body);
  res.status(201).json(newUser);
});

// Update user

router.route('/:userId').put(async (req, res) => {
  const updateFields = await usersService.updateUser(
    req.params.userId,
    req.body
  );
  res.status(200).json(updateFields);
});

// Delete user by id

router.route('/:userId').delete(async (req, res) => {
  await usersService.deleteUser(req.params.userId);
  await taskDB.deleteUserIdFromTask(req.params.userId);
  res.status(204).send('Deleting is completed');
});

module.exports = router;
