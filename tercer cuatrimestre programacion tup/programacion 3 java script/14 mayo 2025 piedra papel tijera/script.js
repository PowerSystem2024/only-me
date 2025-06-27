let victorias = 0;
let derrotas = 0;

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
        victorias++;
        alert(`¡Ganaste esta ronda!\nVictorias: ${victorias} | Derrotas: ${derrotas}`);
    } else {
        derrotas++;
        alert(`Perdiste esta ronda.\nVictorias: ${victorias} | Derrotas: ${derrotas}`);
    }
}

function iniciarJuego() {
    victorias = 0;
    derrotas = 0;

    while (victorias < 3 && derrotas < 3) {
        jugar();
    }

    if (victorias === 3) {
        alert("🎉 ¡Ganaste la partida completa! 🎉\n¿Querés volver a jugar?");
    } else {
        alert("😢 Perdiste la partida. ¡Mejor suerte la próxima!\n¿Querés volver a jugar?");
    }

    mostrarMensajeFinal();
}

function mostrarMensajeFinal() {
    document.getElementById("mensaje-final").style.display = "block";
    document.getElementById("boton-reiniciar").style.display = "inline-block";
}

function reiniciarJuego() {
    document.getElementById("mensaje-final").style.display = "none";
    document.getElementById("boton-reiniciar").style.display = "none";
    iniciarJuego();
}

window.onload = iniciarJuego;
