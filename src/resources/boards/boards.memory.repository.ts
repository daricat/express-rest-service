import BoardModel from './boards.model';
/**
 * Creates a new BoardDB.
 * @class
 * @constructor
 * @public
 * @property {Boards[]} boards - stores all created boards
 */

class BoardDB {
  boards: BoardModel[];

  constructor() {
    this.boards = [];
  }

  /**
   * @method addBoard
   * @description -- add new board in this.boards store
   * @param {Boards} board
   * @return {Boards} -- new Boards exemplar
   */
  addBoard(board: BoardModel) {
    const newBoard = new BoardModel(board);
    this.boards.push(newBoard);
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
  getBoardById(id: string) {
    const foundBoardIndex = this.boards.find((board) => board.id === id);
    if (!foundBoardIndex) throw new Error(`The board with ${id} doesn't found!`);

    return foundBoardIndex;
  }

  /**
   * @method updateBoard
   * @description -- update board by id
   * @param {string} id
   * @param {BoardInfo} updateFields
   * @return {Boards}
   */
  updateBoard(id: string, updateFields: BoardModel): BoardModel {
    const board = this.getBoardById(id);

    if (!board) throw new Error(`The board with ${id} doesn't found!`);

    Object.entries(updateFields).forEach(([key, value]) => {
      Object.defineProperty(board, key, { value });
    });

    return board;
  }

  /**
   * @method deleteBoard
   * @description -- delete board by id
   * @param {string} id
   */
  deleteBoard(id: string): undefined {
    this.boards = this.boards.filter((board) => board.id !== id);
    return undefined;
  }
}

/**
 * @type {BoardDB}
 */
const boardDB = new BoardDB();

export default boardDB;
