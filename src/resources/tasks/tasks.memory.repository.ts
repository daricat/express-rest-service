import TaskModel from './tasks.model';

/**
 * Creates a new TaskDB.
 * @class
 * @constructor
 * @public
 * @property {Tasks[]} tasks - stores all created tasks
 */

class TaskDB {
  tasks: TaskModel[];

  constructor() {
    this.tasks = [];
  }

  /**
   * @method addTask
   * @description -- add new task in this.tasks store
   * @param {Tasks} task
   * @return {Tasks} -- new Tasks exemplar
   */
  addTask(task: TaskModel) {
    this.tasks.push(task);
    return task;
  }

  /**
   * @method getAllTasks
   * @description -- get all tasks from board by id
   * @param {string} boardId
   * @return {Tasks[]} -- all tasks from board by id
   */
  getAllTasks(boardId: string): TaskModel[] {
    return this.tasks.filter((task) => task.boardId === boardId);
  }

  /**
   * @method getTaskById
   * @description -- get task by id from board by id
   * @param {string} boardId
   * @param {string} taskId
   * @return {Tasks | Error} -- found task or error
   */
  getTaskById(boardId: string, taskId: string) {
    const foundtaskIndex = this.tasks.find(
      (task) => task.id === taskId && task.boardId === boardId
    );

    if (!foundtaskIndex)
      throw new Error(`The task with ${taskId} doesn't found!`);

    return foundtaskIndex;
  }

  /**
   * @method updateTask
   * @description -- update task by id
   * @param {string} boardId
   * @param {string} taskId
   * @param {TaskInfo} updateFields
   * @return {Tasks} -- updated task
   */
  updateTask(boardId: string, taskId: string, updateFields: TaskModel) {
    const task = this.getTaskById(boardId, taskId);

    if (!task) throw new Error(`The task with ${taskId} doesn't found!`);

    Object.entries(updateFields).forEach(([key, value]) => {
      Object.defineProperty(task, key, { value });
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
  deleteTask(boardId: string, taskId: string): null {
    this.tasks = this.tasks.filter(
      (task) => task.id !== taskId || task.boardId !== boardId
    );
    return null;
  }

  /**
   * @method deleteBoardsIdFromTask
   * @description -- delete board from task if deleting board
   * @param {string} boardId
   * @return {null}
   */
  deleteBoardsIdFromTask(boardId: string): undefined {
    this.tasks.forEach((task) => {
      const taskCopy = task;
      if (taskCopy.boardId === boardId) taskCopy.boardId = undefined;
    });
    return undefined;
  }

  /**
   * @method deleteUserIdFromTask
   * @description -- delete board from task if deleting board
   * @param {string} userId
   * @return {null}
   */
  deleteUserIdFromTask(userId: string): null {
    this.tasks.forEach((task) => {
      const taskCopy = task;
      if (taskCopy.userId === userId) taskCopy.userId = null;
    });
    return null;
  }
}

/**
 * @type {TaskDB}
 */
const taskDB = new TaskDB();

export default taskDB;
