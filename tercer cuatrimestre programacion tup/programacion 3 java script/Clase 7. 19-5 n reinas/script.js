const N = 8; 
document.getElementById("sizeDisplay").textContent = N;
document.getElementById("sizeDisplay2").textContent = N;

const boardElement = document.getElementById("board");
boardElement.style.gridTemplateColumns = `repeat(${N}, 50px)`;

let solution = Array(N).fill(-1);

function esSeguro(fila, columna) {
  for (let i = 0; i < fila; i++) {
    if (
      solution[i] === columna ||
      solution[i] - i === columna - fila ||
      solution[i] + i === columna + fila
    ) {
      return false;
    }
  }
  return true;
}

function resolver(fila = 0) {
  if (fila === N) return true;

  for (let col = 0; col < N; col++) {
    if (esSeguro(fila, col)) {
      solution[fila] = col;
      if (resolver(fila + 1)) return true;
    }
  }
  return false;
}

function mostrarTablero() {
  boardElement.innerHTML = "";
  for (let fila = 0; fila < N; fila++) {
    for (let col = 0; col < N; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if ((fila + col) % 2 === 0) {
        cell.classList.add("white");
      } else {
        cell.classList.add("black");
      }

      if (solution[fila] === col) {
        cell.textContent = "♛";
      }

      boardElement.appendChild(cell);
    }
  }
  document.getElementById("solution").textContent = JSON.stringify(solution);
}

if (resolver()) {
  mostrarTablero();
} else {
  alert("No se encontró solución.");
}

