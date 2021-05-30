const uuid = require('uuid').v4;

/** Type definition for Task.
 * @typedef {Object} TaskInfo
 * @property {string} id
 * @property {string} title
 * @property {number} order
 * @property {string} description
 * @property {string} userId
 * @property {string} boardId
 * @property {string} columnId
 */

/** Type definition for Tasks.
 * @class
 * @constructor
 * @public
 * @typedef {Tasks} Tasks
 * @param {TaskInfo} [taskInfo={}] -- information about task
 * @property {string} id
 * @property {string} title
 * @property {number} order
 * @property {string} description
 * @property {string} userId
 * @property {string} boardId
 * @property {string} columnId
 */

export default class TaskModel {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId?: string | undefined;

  columnId: string;

  constructor(
    {
      id = uuid(),
      title = 'title',
      order = 0,
      description = 'description',
      userId = '',
      boardId = '',
      columnId = '',
    }: TaskModel,
    reqBoardId: string
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
