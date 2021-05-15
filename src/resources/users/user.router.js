const router = require('express').Router();

const User = require('./user.model');
const usersService = require('./user.service');
const taskDB = require('../tasks/tasks.memory.repository');

// GET ALL USER

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users);
});

// GET USER BY ID

router.route('/:userId').get(async (req, res) => {
  const userById = await usersService.getUserbyId(req.params.userId);
  res.status(200).send(userById);
});

// CREATE USER

router.route('/').post(async (req, res) => {
  const newUser = await usersService.addUser(new User(req.body));
  res.status(201).send(newUser);
});

// UPDATE USER

router.route('/:userId').put(async (req, res) => {
  const updateFields = await usersService.updateUser(req.params.userId, req.body);
  res.status(200).send(updateFields);
});

// DELETE USER BY ID

router.route('/:userId').delete(async (req, res) => {
  await usersService.deleteUser(req.params.userId);
  await taskDB.deleteUserIdFromTask(req.params.userId);
  res.status(204).send();
});


module.exports = router;
