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
    if (!foundBoardIndex) return undefined;

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
    // console.log('================================================');
    // console.log(id, 'id')
    // console.log('delete до');
    // console.log(this.boards, 'delete до');
    // console.log('---------------------------------------------');
    this.boards = this.boards.filter((board) => board.id !== id);
    return this.board;
    // console.log('delete после');
    // console.log(this.boards);
    // console.log('================================================');
  }
}

const boardDB = new BoardDB();

module.exports = boardDB;
