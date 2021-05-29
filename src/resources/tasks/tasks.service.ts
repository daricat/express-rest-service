import {ITaskModel, TaskModel} from "./tasks.model";

const taskDB = require('./tasks.memory.repository');
const Tasks = require('./tasks.model');

/**
 * @function getAllTasks
 * @description -- calls method from class [TaskDB]{@link taskDB} to get all tasks
 * @return {Promise<Tasks[]>}
 */
const getAllTasks = (boardId: string) => taskDB.getAllTasks(boardId);

/**
 * @function getTaskById
 * @description -- calls method from class [TaskDB]{@link taskDB} to get tasks by id
 * @param {string} boardId
 * @param {string} taskId
 * @return {Promise<Tasks>}
 */
const getTaskById = (boardId: string, taskId: string) => taskDB.getTaskById(boardId, taskId);

/**
 * @function addTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to add new task
 * @param {Task} task
 * @return {Promise<Tasks>}
 */
const addTask = (task: ITaskModel) => taskDB.addTask(new Tasks(task));

/**
 * @function updateTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to update task
 * @param {string} boardId
 * @param {string} taskId
 * @param {TaskInfo} fields
 * @return {Promise<Tasks>}
 */
const updateTask = (boardId: string, taskId: string, fields: TaskModel) => taskDB.updateTask(boardId, taskId, fields);

/**
 * @function deleteTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to delete task
 * @param {string} boardId
 * @param {string} taskId
 * @return {Promise}
 */
const deleteTask = (boardId: string, taskId: string) => taskDB.deleteTask(boardId, taskId);

export { getAllTasks, getTaskById, addTask, updateTask, deleteTask };
