const uuid = require('uuid').v4;

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
