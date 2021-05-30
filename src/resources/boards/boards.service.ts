import BoardModel from './boards.model';
import boardDB from './boards.memory.repository';

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
const getBoardById = (id: string) => boardDB.getBoardById(id);

/**
 * @function addBoard
 * @description -- calls method from class [BoardDB]{@link boardDB} to add board
 * @param {Boards} board
 * @return {Promise<BoardModel>}
 */
const addBoard = (board: BoardModel) => boardDB.addBoard(board);

/**
 * @function updateBoard
 * @description -- calls method from class [BoardDB]{@link boardDB} to update board
 * @param {string} id
 * @param {BoardInfo} fields
 * @return {Promise<BoardModel>}
 */
const updateBoard = (id: string, fields: BoardModel) => boardDB.updateBoard(id, fields);

/**
 * @function deleteBoard
 * @description -- calls method from class [BoardDB]{@link boardDB} for deleting board
 * @param {string} id
 * @return {Promise}
 */
const deleteBoard = (id: string) => boardDB.deleteBoard(id);

export { getAllBoards, getBoardById, addBoard, updateBoard, deleteBoard };
