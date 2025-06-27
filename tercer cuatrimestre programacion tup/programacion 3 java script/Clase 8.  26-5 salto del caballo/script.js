const N = 8;
let tablero = Array.from({ length: N }, () => Array(N).fill(-1));

const movimientosCaballo = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function esValido(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N && tablero[x][y] === -1;
}

function recorrerCaballo(x, y, movimiento) {
  if (movimiento === N * N) return true;

  for (let [dx, dy] of movimientosCaballo) {
    let nx = x + dx;
    let ny = y + dy;
    if (esValido(nx, ny)) {
      tablero[nx][ny] = movimiento;
      if (recorrerCaballo(nx, ny, movimiento + 1)) return true;
      tablero[nx][ny] = -1;
    }
  }
  return false;
}

function crearTableroVisual() {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const celda = document.createElement("div");
      celda.classList.add("casilla");
      celda.classList.add((i + j) % 2 === 0 ? "blanco" : "negro");
      celda.innerHTML = `<span>${tablero[i][j]}</span>`;
      contenedor.appendChild(celda);
    }
  }
}

function iniciar() {
  tablero[0][0] = 0;
  if (recorrerCaballo(0, 0, 1)) {
    crearTableroVisual();
  } else {
    alert("No se encontró solución.");
  }
}

iniciar();

