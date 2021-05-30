import TaskModel from "./tasks.model";
import taskDB from './tasks.memory.repository';

/**
 * @function getAllTasks
 * @description -- calls method from class [TaskDB]{@link taskDB} to get all tasks
 * @return {Promise<TaskModel[]>}
 */
const getAllTasks = (boardId: string) => taskDB.getAllTasks(boardId);

/**
 * @function getTaskById
 * @description -- calls method from class [TaskDB]{@link taskDB} to get tasks by id
 * @param {string} boardId
 * @param {string} taskId
 * @return {Promise<TaskModel>}
 */
const getTaskById = (boardId: string, taskId: string) => taskDB.getTaskById(boardId, taskId);

/**
 * @function addTask
 * @description -- calls method from class [TaskDB]{@link taskDB} to add new task
 * @param {Task} task
 * @return {Promise<Tasks>}
 */
const addTask = (task: TaskModel, reqId: string) => taskDB.addTask(new TaskModel(task, reqId));

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
