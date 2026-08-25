import { fila, columna } from "./generator.js";

// Factory function para crear un tablero
function createBoard() {
  const sizeBoard = 10;
  const initiator = 0;
  const board = [];

  for (let i = 0; i < sizeBoard; i++) {
    board.push([]); // board =[[]]
    for (let j = 0; j < sizeBoard; j++) {
      board[i].push(initiator);
    }
  }

  return {
    setCell: (fila, colum, valor) => (board[fila][colum] = valor),
    getCell: (fila, colum) => board[fila][colum],
    viewBoard: () => board.map((copia) => [...copia]),
  };
}

// inicialización de la Factory function
const gameBoard = createBoard();

//asignacion de bots y casas con el generador
let bot1 = gameBoard.setCell(0, 0, "bot1");
let bot2 = gameBoard.setCell(9, 9, "bot2");
for (let i = 0; i < 5; i++) {
  gameBoard.setCell(fila()[i], columna()[i], `casa ${[i + 1]}`);
}
export let boardView = gameBoard.viewBoard();
