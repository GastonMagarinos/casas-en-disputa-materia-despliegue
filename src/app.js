import { boardVerification } from "./referee.js";
import { boardView } from "./board.js";

function funcionamientoJuego() {
  if (boardVerification === true) {
    return console.table(boardView);
  } else {
    return console.log(`El arbitro indica que el tablero no esta en regla`);
  }
}

funcionamientoJuego();
