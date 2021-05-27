/**
 * Creates a new TaskDB.
 * @class
 * @constructor
 * @public
 * @property {Tasks[]} tasks - stores all created tasks
 */

class TaskDB {
  constructor() {
    this.tasks = [];
  }

  /**
   * @method addTask
   * @description -- add new task in this.tasks store
   * @param {Tasks} task
   * @return {Tasks} -- new Tasks exemplar
   */
  addTask(task) {
    this.tasks.push(task);
    return task;
  }

  /**
   * @method getAllTasks
   * @description -- get all tasks from board by id
   * @param {string} boardId
   * @return {Tasks[]} -- all tasks from board by id
   */
  getAllTasks(boardId) {
    return this.tasks.filter((task) => task.boardId === boardId);
  }

  /**
   * @method getTaskById
   * @description -- get task by id from board by id
   * @param {string} boardId
   * @param {string} taskId
   * @return {Tasks | Error} -- found task or error
   */
  getTaskById(boardId, taskId) {
    const foundtaskIndex = this.tasks.find(
      (task) => task.id === taskId && task.boardId === boardId
    );
    if (!foundtaskIndex) throw new Error();

    return foundtaskIndex;
  }

  /**
   * @method updateTask
   * @description -- update task by id
   * @param {string} boardId
   * @param {string} taskId
   * @param {Tasks} updateFields
   * @return {Tasks} -- updated task
   */
  updateTask(boardId, taskId, updateFields) {
    const task = this.getTaskById(boardId, taskId);

    Object.entries(updateFields).forEach(([key, value]) => {
      task[key] = value;
    });

    return task;
  }

  /**
   * @method deleteTask
   * @description -- delete task by id from board id
   * @param {string} boardId
   * @param {string} taskId
   * @return {undefined}
   */
  deleteTask(boardId, taskId) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== taskId || task.boardId !== boardId
    );
  }

  /**
   * @method deleteBoardsIdFromTask
   * @description -- delete board from task if deleting board
   * @param {string} boardId
   * @return {undefined}
   */
  deleteBoardsIdFromTask(boardId) {
    this.tasks.forEach((task) => {
      const taskCopy = task;
      if (taskCopy.boardId === boardId) taskCopy.boardId = null;
    });
  }

  /**
   * @method deleteUserIdFromTask
   * @description -- delete user from task if deleting user
   * @param {string} userId
   * @return {undefined}
   */
  deleteUserIdFromTask(userId) {
    this.tasks.forEach((task) => {
      const taskCopy = task;
      if (taskCopy.userId === userId) taskCopy.userId = null;
    });
  }
}

/**
 * @type {TaskDB}
 */
const taskDB = new TaskDB();

module.exports = taskDB;
