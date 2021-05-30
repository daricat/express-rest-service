const uuid = require('uuid').v4;

interface IColumn {
  id: string;
  title: string;
  order: number;
}

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
 * @property {IColumn[]} [columns=[]]
 */

export default class BoardModel {
  id: string;

  title: string;

  columns: IColumn[];

  constructor({ id = uuid(), title = 'title', columns = [] }: BoardModel) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

