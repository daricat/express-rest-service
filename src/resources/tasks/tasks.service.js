const taskDB = require('./tasks.memory.repository');
const Tasks = require('./tasks.model');

const getAllTasks = (boardId) => taskDB.getAllTasks(boardId);

const getTaskById = (boardId, taskId) => taskDB.getTaskById(boardId, taskId);

const addTask = (task) => taskDB.addTask(new Tasks(task));

const updateTask = (boardId, taskId, fields) => taskDB.updateTask(boardId, taskId, fields);

const deleteTask = (boardId, taskId) => taskDB.deleteTask(boardId, taskId);

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
