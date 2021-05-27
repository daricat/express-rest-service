const uuid = require('uuid').v4;

/** Type definition for Column.
 * @typedef {Object} ColumnInfo
 * @property {string} id
 * @property {string} title
 * @property {number} order
 */

/** Type definition for Column.
 * @typedef {Object} BoardInfo
 * @property {string} id
 * @property {string} title
 * @property {number} order
 */

/** Type definition for Boad.
 * @class
 * @constructor
 * @public
 * @typedef {Object} Boards
 * @param {BoardInfo} [boardInfo={}] -- information about board
 * @property {string} [id=uuid()]
 * @property {string} [title='title']
 * @property {ColumnInfo[]} [columns=[]]
 */

class Boards {
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Boards;
