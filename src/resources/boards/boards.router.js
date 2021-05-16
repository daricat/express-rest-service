const router = require('express').Router();

const boardService = require('./boards.service');
const taskDB = require('../tasks/tasks.memory.repository');

// Get all boards

router.route('/').get(async (req, res) => {
  const result = await boardService.getAllBoards();
  res.status(200).json(result);
});

// Get board by id

router.route('/:boardId').get(async (req, res) => {
  try {
    const result = await boardService.getBoardById(req.params.boardId);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json('Board isn\'t found');
  }
});

// Create board

router.route('/').post(async (req, res) => {
  const result = await boardService.addBoard(req.body);
  res.status(201).json(result);
});

// Update board

router.route('/:boardId').put(async (req, res) => {
  const result = await boardService.updateBoard(req.params.boardId, req.body);
  res.status(200).json(result);
});

// Delete board

router.route('/:boardId').delete(async (req, res) => {
  await boardService.deleteBoard(req.params.boardId);
  await taskDB.deleteBoardsIdFromTask(req.params.boardId);
  res.status(200).json('Deleting is completed');
});

module.exports = router;
