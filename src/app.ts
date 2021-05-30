import express from 'express';

import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/boards.router';
import tasksRouter from './resources/tasks/tasks.router';

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const app = express();

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(
  '/',
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  }
);

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards', tasksRouter);

export default app;
