import express from 'express';

import * as boardService from './boards.service';
import taskDB from '../tasks/tasks.memory.repository';

const router = express.Router();

// Get all boards

router.route('/').get(async (_req: express.Request, res: express.Response) => {
  const result = await boardService.getAllBoards();
  res.json(result);
});

// Get board by id

router
  .route('/:boardId')
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const result = await boardService.getBoardById(req.params.boardId || '');
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json("Board isn't found");
    }
  });

// Create board

router.route('/').post(async (req: express.Request, res: express.Response) => {
  const result = await boardService.addBoard(req.body);
  res.status(201).json(result);
});

// Update board

router
  .route('/:boardId')
  .put(async (req: express.Request, res: express.Response) => {
    try {
      const result = await boardService.updateBoard(
        req.params.boardId || '',
        req.body
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json("Board isn't found");
    }
  });

// Delete board

router
  .route('/:boardId')
  .delete(async (req: express.Request, res: express.Response) => {
    await boardService.deleteBoard(req.params.boardId || '');
    await taskDB.deleteBoardsIdFromTask(req.params.boardId || '');
    res.status(200).json('Deleting is completed');
  });

export default router;
