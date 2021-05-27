const uuid = require('uuid').v4;

/** Type definition for Task.
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {number} order
 * @property {string} description
 * @property {string} userId
 * @property {string} boardId
 * @property {string} columnId
 */

/** Type definition for Tasks.
 * @typedef {Object} Tasks
 * @param {Task} [taskInfo={}] -- information about task
 * @property {string} id
 * @property {string} title
 * @property {number} order
 * @property {string} description
 * @property {string} userId
 * @property {string} boardId
 * @property {string} columnId
 */

class Tasks {
  constructor(
    {
      id = uuid(),
      title = 'title',
      order = 0,
      description = 'description',
      userId = null,
      boardId = null,
      columnId = null,
    } = {},
    reqBoardId
  ) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId || reqBoardId;
    this.columnId = columnId;
  }
}

module.exports = Tasks;
