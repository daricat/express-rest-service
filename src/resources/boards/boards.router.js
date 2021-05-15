const router = require('express').Router();
const boardService = require('./boards.service');

// Get all boards

router.route('/').get(async (req, res) => {
  const result = await boardService.getAllBoards();
  res.status(200).send(result);
});

// Get board by id

router.route('/:boardId').get(async (req, res) => {
  const result = await boardService.getBoardById(req.params.boardId);
  res.status(200).send(result);
});

// Create board

router.route('/').post(async (req, res) => {
  const result = await boardService.addBoard(req.body);
  res.status(201).send(result);
});

// Update board

router.route('/:boardId').put(async (req, res) => {
  const result = await boardService.updateBoard(req.params.boardId, req.body);
  res.status(200).send(result);
});

// Delete board

router.route('/:boardId').delete(async (req, res) => {
  await boardService.deleteBoard(req.params.boardId);
  res.status(200).send();
});

module.exports = router;
