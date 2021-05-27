/**
 * Creates a new BoardDB.
 * @class
 * @constructor
 * @public
 * @property {Boards[]} boards - stores all created boards
 */

class BoardDB {
  constructor() {
    this.boards = [];
  }

  /**
   * @method addBoard
   * @description -- add new board in this.boards store
   * @param {Boards} board
   * @return {Boards} -- new Boards exemplar
   */
  addBoard(board) {
    this.boards.push(board);
    return board;
  }

  /**
   * @method getAllBoards
   * @description -- return all stored boards
   * @return {Board[]}
   */
  getAllBoards() {
    return this.boards;
  }

  /**
   * @method getBoardById
   * @description -- return board by id
   * @param {string} id
   * @return {Boards}
   */
  getBoardById(id) {
    const foundBoardIndex = this.boards.find((board) => board.id === id);
    if (!foundBoardIndex) throw new Error();

    return foundBoardIndex;
  }

  /**
   * @method updateBoard
   * @description -- update board by id
   * @param {string} id
   * @param {BoardInfo} updateFields
   * @return {Boards}
   */
  updateBoard(id, updateFields) {
    const board = this.getBoardById(id);

    Object.entries(updateFields).forEach(([key, value]) => {
      board[key] = value;
    });

    return board;
  }

  /**
   * @method deleteBoard
   * @description -- delete board by id
   * @param {string} id
   */
  deleteBoard(id) {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}

/** 
 * @type {BoardDB}
*/
const boardDB = new BoardDB();

module.exports = boardDB;
