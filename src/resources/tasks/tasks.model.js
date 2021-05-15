const uuid = require('uuid').v4;

class Tasks {
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [...columns];
  }
}

module.exports = Tasks;
