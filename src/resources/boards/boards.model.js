const uuid = require('uuid').v4;

/** Type definition for Column.
 * @typedef {Object} Column
 * @property {string} id
 * @property {string} title
 * @property {number} order
 */


/** Type definition for Boad.
 * @typedef {Object} Boards
 * @param {Object} [boardInfo={}] -- information about board
 */

class Boards {
  constructor({ id = uuid(), title = 'title', columns = [] } = {}) {
    /**
     * @property {string} id
     */
    this.id = id;
    /**
     * @property {string} title
     */
    this.title = title;
    /**
     * @property {Column[]} [columns=[]]
     */
    this.columns = columns;
  }
}

module.exports = Boards;
