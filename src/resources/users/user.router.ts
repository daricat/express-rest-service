import express from 'express';

import taskDB from '../tasks/tasks.memory.repository';
import * as userServices from './user.service';

const router = express.Router();

// Get all users

router.route('/').get(async (req: express.Request, res: express.Response) => {
  const users = await userServices.getAllUsers();
  res.status(200).json(users);
});

// Get user by id

router
  .route('/:userId')
  .get(async (req: express.Request, res: express.Response) => {
    try {
      const userById = await userServices.getUserbyId(req.params.userId || '');
      res.status(200).json(userById);
    } catch (error) {
      res.status(404).send("User isn't found");
    }
  });

// Create user

router.route('/').post(async (req: express.Request, res: express.Response) => {
  const newUser = await userServices.addUser(req.body);
  res.status(201).json(newUser);
});

// Update user

router
  .route('/:userId')
  .put(async (req: express.Request, res: express.Response) => {
    const updateFields = await userServices.updateUser(
      req.params.userId || '',
      req.body
    );
    res.status(200).json(updateFields);
  });

// Delete user by id

router
  .route('/:userId')
  .delete(async (req: express.Request, res: express.Response) => {
    await userServices.deleteUser(req.params.userId || '');
    await taskDB.deleteUserIdFromTask(req.params.userId);
    res.status(204).send('Deleting is completed');
  });

export default router;
