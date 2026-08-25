//generador de números aleatorios
class Mulberry32 {
  constructor(seed) {
    this.seed = seed >>> 0;
  }

  next() {
    let t = (this.seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
}

//seed para el generador de números aleatorios
const rng = new Mulberry32("picante");

//paametros para la ubicación de las casas en filas
export const fila = function filas() {
  const values = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0 || i === 1) {
      values.push(Math.floor(rng.next() * (3 - 2 + 1)) + 2);
    } else if (i === 3 || i === 4) {
      values.push(Math.floor(rng.next() * (7 - 6 + 1)) + 6);
    } else if (i === 2) {
      values.push(Math.floor(rng.next() * (5 - 4 + 1)) + 4);
    }
  }
  return values;
};

//parametros para la ubicación de las casas en columnas
export const columna = function columnas() {
  const values = [];

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      values.push(Math.floor(rng.next() * (5 - 2 + 1)) + 2);
    } else if (i === 1) {
      values.push(Math.floor(rng.next() * (9 - 6 + 1)) + 6);
    } else if (i === 3) {
      values.push(Math.floor(rng.next() * (3 - 0 + 1)) + 0);
    } else if (i === 4) {
      values.push(Math.floor(rng.next() * (7 - 4 + 1)) + 4);
    } else if (i === 2) {
      values.push(Math.floor(rng.next() * (7 - 2 + 1)) + 2);
    }
  }
  return values;
};
