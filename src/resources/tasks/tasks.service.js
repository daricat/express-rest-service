const taskDB = require('./tasks.memory.repository');
const Tasks = require('./tasks.model');

/**
 * @function getAllTasks
 * @description -- calls method from class [TaskDB]{@link taskDB} to get all tasks
 * @return {Promise<Tasks[]>}
 */
const getAllTasks = (boardId) => taskDB.getAllTasks(boardId);

/**
 * @function getTaskById
 * @description -- calls method from class [TaskDB]{@link taskDB} to get tasks by id
 * @param {string} boardId
 * @param {string} taskId
 * @return {Promise<Tasks>}
 */
const getTaskById = (boardId, taskId) => taskDB.getTaskById(boardId, taskId);

/**
 * @function addTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to add new task
 * @param {Task} task
 * @return {Promise<Tasks>}
 */
const addTask = (task) => taskDB.addTask(new Tasks(task));

/**
 * @function updateTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to update task
 * @param {string} boardId
 * @param {string} taskId
 * @param {TaskInfo} fields
 * @return {Promise<Tasks>}
 */
const updateTask = (boardId, taskId, fields) => taskDB.updateTask(boardId, taskId, fields);

/**
 * @function deleteTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to delete task
 * @param {string} boardId
 * @param {string} taskId
 * @return {Promise}
 */
const deleteTask = (boardId, taskId) => taskDB.deleteTask(boardId, taskId);

module.exports = { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
