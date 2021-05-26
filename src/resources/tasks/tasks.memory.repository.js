class TaskDB {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    return task;
  }

  getAllTasks(boardId) {
    return this.tasks.filter((task) => task.boardId === boardId);
  }

  getTaskById(boardId, taskId) {
    const foundtaskIndex = this.tasks.find(
      (task) => task.id === taskId && task.boardId === boardId
    );
    if (!foundtaskIndex) throw new Error();

    return foundtaskIndex;
  }

  updateTask(boardId, taskId, updateFields) {
    const task = this.getTaskById(boardId, taskId);

    Object.entries(updateFields).forEach(([key, value]) => {
      task[key] = value;
    });

    return task;
  }

  deleteTask(boardId, taskId) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== taskId || task.boardId !== boardId
    );
  }

  deleteBoardsIdFromTask(boardId) {
    this.tasks.forEach((task) => { 
      const taskCopy = task;
      if (taskCopy.boardId === boardId) taskCopy.boardId = null;
    });
  }

  deleteUserIdFromTask(userId) {
    this.tasks.forEach((task) => { 
      const taskCopy = task;
      if (taskCopy.userId === userId) taskCopy.userId = null;
    });
  }
}

const taskDB = new TaskDB();

module.exports = taskDB;
