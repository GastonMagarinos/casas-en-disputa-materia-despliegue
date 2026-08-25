import { boardView } from "./board.js";
const values = [
  "bot1",
  "bot2",
  "casa 1",
  "casa 2",
  "casa 3",
  "casa 4",
  "casa 5",
];
let flatBoard = boardView.flat(); //metodo para sacar los subarreglos y hacerlos un solo arreglo
//verifica si todos los valores existen en el tablero,con el metodo every pasa todos los valores del array que queremos verificar y con includes verifica si el valor existe en el tablero
export let boardVerification = values.every((valor) =>
  flatBoard.includes(valor),
);

function movimientoBot() {
  let fila = 0;
  let columna = 0;
  return function mover(movimiento, dado) {
    if (movimiento === "arriba") {
      fila = (fila - dado + 10) % 10;
    } else if (movimiento === "abajo") {
      fila = (fila + dado) % 10;
    } else if (movimiento === "izquierda") {
      columna = (columna - dado + 10) % 10;
    } else if (movimiento === "derecha") {
      columna = (columna + dado) % 10;
    }
    return [fila, columna];
  };
}
let bot1 = movimientoBot();
let bot2 = movimientoBot();

function checkBoard(turno) {
  for (let i = 0; i < 10; i++) {
    if (boardView[i].findIndex((valor) => valor === turno) !== -1) {
      return [i, boardView[i].findIndex((valor) => valor === turno)];
    }
  }
}
const checkBot1 = checkBoard("bot1");
const posicionBot1 = bot1("abajo", 2);
function comparacion() {
  if (posicionBot1.toString() === checkBot1.toString()) {
    return true;
  } else {
    return false;
  }
}
console.log(comparacion());
