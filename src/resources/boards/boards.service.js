const boardDB = require('./boards.memory.repository');
const Boards = require('./boards.model');

/**
 * @function getAllBoards
 * @description -- calls method from class [BoardDB]{@link boardDB} to get all boards
 * @return {Promise<Boards[]>}
 */
const getAllBoards = () => boardDB.getAllBoards();

/**
 * @function getBoardById
 * @description -- calls method from class [BoardDB]{@link boardDB} to get board by id
 * @param {string} id
 * @return {Promise<Boards>}
 */
const getBoardById = (id) => boardDB.getBoardById(id);

/**
 * @function addBoard
 * @description -- calls method from class [BoardDB]{@link boardDB} to add board
 * @param {Boards} board
 * @return {Promise<Boards>}
 */
const addBoard = (board) => boardDB.addBoard(new Boards(board));

/**
 * @function updateBoard
 * @description -- calls method from class [BoardDB]{@link boardDB} to update board
 * @param {string} id
 * @param {BoardInfo} fields
 * @return {Promise<Boards>}
 */
const updateBoard = (id, fields) => boardDB.updateBoard(id, fields);

/**
 * @function deleteBoard
 * @description -- calls method from class [BoardDB]{@link boardDB} for deleting board
 * @param {string} id
 * @return {Promise}
 */
const deleteBoard = (id) => boardDB.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoardById,
  addBoard,
  updateBoard,
  deleteBoard,
};
