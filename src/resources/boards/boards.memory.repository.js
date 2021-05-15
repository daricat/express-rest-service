class BoardDB {
  constructor() {
    this.boards = [];
  }

  addBoard(board) {
    this.boards.push(board);
    return board;
  }

  getAllBoards() {
    return this.boards;
  }

  getBoardById(id) {
    const foundBoardIndex = this.boards.find((board) => board.id === id);
    if (!foundBoardIndex) throw new Error();

    return foundBoardIndex;
  }

  updateBoard(id, updateFields) {
    const board = this.getBoardById(id);

    Object.entries(updateFields).forEach(([key, value]) => {
      board[key] = value;
    });

    return board;
  }

  deleteBoard(id) {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}

const boardDB = new BoardDB();

module.exports = boardDB;
