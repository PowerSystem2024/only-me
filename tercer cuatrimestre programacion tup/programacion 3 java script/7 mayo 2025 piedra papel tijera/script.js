function obtenerOpcionComputadora() {
    const min = 1;
    const max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obtenerOpcionJugador() {
    let opcion;
    do {
        opcion = parseInt(prompt("Elige: 1 = Piedra, 2 = Papel, 3 = Tijera"));
    } while (![1, 2, 3].includes(opcion));
    return opcion;
}

function convertirOpcion(opcion) {
    switch (opcion) {
        case 1: return "Piedra";
        case 2: return "Papel";
        case 3: return "Tijera";
    }
}

function jugar() {
    const jugador = obtenerOpcionJugador();
    const computadora = obtenerOpcionComputadora();

    alert("Elegiste: " + convertirOpcion(jugador));
    alert("La computadora eligió: " + convertirOpcion(computadora));

    if (jugador === computadora) {
        alert("¡Empate!");
    } else if (
        (jugador === 1 && computadora === 3) ||
        (jugador === 2 && computadora === 1) ||
        (jugador === 3 && computadora === 2)
    ) {
        alert("¡Ganaste!");
    } else {
        alert("Perdiste...");
    }
}

function iniciarJuego() {
    do {
        jugar();
    } while (confirm("¿Quieres jugar otra vez?"));
    alert("Gracias por jugar. ¡Hasta la próxima!");
}

iniciarJuego();
