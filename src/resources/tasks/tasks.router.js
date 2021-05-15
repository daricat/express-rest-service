const router = require('express').Router();
const Task = require('./tasks.model');
const taskService = require('./tasks.service');

// GET ALL USER

router.route('/').get(async (req, res) => {
  const users = await taskService.getAll();
  res.json(users);
});

// GET USER BY ID

router.route('/:userId').get(async (req, res) => {
  const userById = await taskService.getUserbyId(req.params.userId);
  res.status(200).send(userById);
});

// CREATE USER

router.route('/').post(async (req, res) => {
  const newUser = await taskService.addUser(new Task(req.body));
  res.status(201).send(newUser);
});

// UPDATE USER

router.route('/:userId').put(async (req, res) => {
  const updateFields = await taskService.updateUser(
    req.params.userId,
    req.body
  );
  res.status(200).send(updateFields);
});

// DELETE USER BY ID

router.route('/:userId').delete(async (req, res) => {
  taskService.deleteUser(req.params.userId);
  res.status(204).send();
});

module.exports = router;
