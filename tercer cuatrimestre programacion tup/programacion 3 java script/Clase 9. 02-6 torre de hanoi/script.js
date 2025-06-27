
const torres = {
  A: document.getElementById("A"),
  B: document.getElementById("B"),
  C: document.getElementById("C")
};

let movimientos = [];

function crearDiscos(n) {
  torres.A.innerHTML = "<strong>A</strong>";
  torres.B.innerHTML = "<strong>B</strong>";
  torres.C.innerHTML = "<strong>C</strong>";
  for (let i = n; i >= 1; i--) {
    const disco = document.createElement("div");
    disco.className = "disco";
    disco.style.width = `${i * 20}px`;
    disco.style.backgroundColor = `hsl(${i * 40}, 70%, 60%)`;
    disco.textContent = `🔹`;
    torres.A.appendChild(disco);
  }
}

function hanoi(n, origen, destino, auxiliar) {
  if (n === 1) {
    movimientos.push([origen, destino]);
    return;
  }
  hanoi(n - 1, origen, auxiliar, destino);
  movimientos.push([origen, destino]);
  hanoi(n - 1, auxiliar, destino, origen);
}

function moverDisco(from, to) {
  const disco = torres[from].querySelector(".disco:last-child");
  if (disco) torres[to].appendChild(disco);
}

function jugar() {
  let cantidadDiscos = 3;
  movimientos = [];
  crearDiscos(cantidadDiscos);
  hanoi(cantidadDiscos, "A", "C", "B");

  let i = 0;
  const intervalo = setInterval(() => {
    if (i >= movimientos.length) {
      clearInterval(intervalo);
      alert("🏆 Juego completado: Todos los discos fueron movidos correctamente a la torre C");
      return;
    }
    const [from, to] = movimientos[i];
    moverDisco(from, to);
    i++;
  }, 1000);
}
