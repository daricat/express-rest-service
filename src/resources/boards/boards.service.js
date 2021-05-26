const boardDB = require('./boards.memory.repository');
const Boards = require('./boards.model');

const getAllBoards = () => boardDB.getAllBoards();

const getBoardById = (id) => boardDB.getBoardById(id);

const addBoard = (board) => boardDB.addBoard(new Boards(board));

const updateBoard = (id, fields) => boardDB.updateBoard(id, fields);

const deleteBoard = (id) => boardDB.deleteBoard(id);

module.exports = { getAllBoards, getBoardById, addBoard, updateBoard, deleteBoard };
