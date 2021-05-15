const router = require('express').Router();
const Task = require('./tasks.model');
const taskService = require('./tasks.service');

// Get all tasks

router.route('/:boardId/tasks').get(async (req, res) => {
  const users = await taskService.getAllTasks(req.params.boardId);
  res.status(200).send(users);
});

// Get tasks by id

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  try {
    const taskById = await taskService.getTaskById(req.params.boardId, req.params.taskId);
    res.status(200).send(taskById);
  } catch (error) {
    res.status(404).send('Task isn\'t found');
  }
});

// Create task

router.route('/:boardId/tasks').post(async (req, res) => {
  const newUser = await taskService.addTask(new Task(req.body, req.params.boardId));
  res.status(201).send(newUser);
});

// Update task

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const updateFields = await taskService.updateTask(
    req.params.boardId, req.params.taskId , req.body
  );
  res.status(200).send(updateFields);
});

// Delete task

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  await taskService.deleteTask(req.params.boardId, req.params.taskId);
  res.status(204).send('Deleting is completed');
});

module.exports = router;
