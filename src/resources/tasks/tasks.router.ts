import express from 'express';
import TaskModel from './tasks.model';
import * as taskService from './tasks.service';

const router = express.Router();

// Get all tasks

router
  .route('/:boardId/tasks')
  .get(async (req: express.Request, res: express.Response) => {
    const users = await taskService.getAllTasks(req.params.boardId || '');
    res.status(200).json(users);
  });

// Get tasks by id

router
  .route('/:boardId/tasks/:taskId')
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const taskById = await taskService.getTaskById(
        req.params.boardId || '',
        req.params.taskId || ''
      );
      res.status(200).send(taskById);
    } catch (error) {
      res.status(404).json("Task isn't found");
    }
  });

// Create task

router
  .route('/:boardId/tasks')
  .post(async (req: express.Request, res: express.Response) => {
    const newUser = await taskService.addTask(
      new TaskModel(req.body, req.params.boardId || '')
    );
    res.status(201).json(newUser);
  });

// Update task

router
  .route('/:boardId/tasks/:taskId')
  .put(async (req: express.Request, res: express.Response) => {
    const updateFields = await taskService.updateTask(
      req.params.boardId || '',
      req.params.taskId || '',
      req.body
    );
    res.status(200).json(updateFields);
  });

// Delete task

router
  .route('/:boardId/tasks/:taskId')
  .delete(async (req: express.Request, res: express.Response) => {
    await taskService.deleteTask(
      req.params.boardId || '',
      req.params.taskId || ''
    );
    res.status(204).json('Deleting is completed');
  });

export default router;
