let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3 //sabemos en el estado en que comienzan las vidas
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById(`seleccionar-ataque`);
    sectionSeleccionarAtaque.style.display = `none`;

    let sectionSeleccionarPersonaje = document.getElementById(`seleccionar-personaje`);
    sectionSeleccionarPersonaje.style.display = `none`;

    let botonJugador = document.getElementById(`boton-jugador`);
    botonJugador.addEventListener(`click`, mostrarSeleccionPersonaje);

    let botonPersonajeJugador =document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let sectionReiniciar = document.getElementById(`reiniciar`);
    sectionReiniciar.style.display = `none`;

    document.getElementById("reglas-del-juego").style.display = "none";
    document.getElementById(`boton-reglas`).addEventListener(`click`, mostrarReglas);

    let botonPunio = document.getElementById(`boton-punio`) 
    botonPunio.addEventListener(`click`, ataquePunio)
    let botonPatada = document.getElementById(`boton-patada`)
    botonPatada.addEventListener(`click`, ataquePatada)
    let botonBarrida = document.getElementById(`boton-barrida`)
    botonBarrida.addEventListener(`click`, ataqueBarrida)
    //CREAMOS UNA NUEVA VARIABLE
    let botonReiniciar = document.getElementById(`boton-reiniciar`)
    botonReiniciar.addEventListener(`click`, reiniciarJuego)
}

function mostrarReglas(){
    document.getElementById("reglas-del-juego").style.display = "block";
}

function mostrarSeleccionPersonaje() {
    let sectionSeleccionarPersonaje = document.getElementById(`seleccionar-personaje`);
    sectionSeleccionarPersonaje.style.display = `block`;

    document.getElementById("reglas-del-juego").style.display = "none";
}

function seleccionarPersonajeJugador() {
    let inputZuco = document.getElementById(`zuko`)
    let inputKatara = document.getElementById(`katara`)
    let inputAang = document.getElementById(`aang`)
    let inputToph = document.getElementById(`toph`)
    let inputZoca = document.getElementById(`zoka`)
    let spanPersonajeJugador = document.getElementById(`personaje-jugador`)
    let sectionSeleccionarAtaque = document.getElementById(`seleccionar-ataque`)
    let sectionSeleccionarPersonaje = document.getElementById(`seleccionar-personaje`)

    document.getElementById("reglas-del-juego").style.display = "none";

    if (inputZuco.checked) {
        spanPersonajeJugador.innerHTML = `Zuko 🔥`
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = `Katara 💧`
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = `Aang 🌪️`
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = `Toph 🌱`
    } else if (inputZoca.checked) {
        spanPersonajeJugador.innerHTML = `Zoka 🍃`
    } else {
        //mostrar un mensaje temporal en la pantalla si no se ha seleccionado un personaje

        let mensajeError = document.createElement("p")
        mensajeError.innerHTML = `Seleccione un personaje`
        mensajeError.style.color = "red"
        sectionSeleccionarPersonaje.appendChild(mensajeError)

        etTimeout(() => {
            if (mensajeError.parentNode) {
                sectionSeleccionarPersonaje.removeChild(mensajeError)
            }
        }, 3000)

        return
    }

    sectionSeleccionarAtaque.style.display = `block`;
    sectionSeleccionarPersonaje.style.display = `none`;
    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo(){ //esta funcion va dentro de seleccionarPersonaje
    let personajeAleatorio = aleatorio(1,5) //a continuación creamos las variables
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo")

    //comenzamos con la lógica
    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = `Zuko 🔥`
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = `Katara 💧`
    } else if (personajeAleatorio == 3) {
        spanPersonajeEnemigo.innerHTML = `Aang 🌪️`
    } else if (personajeAleatorio == 4) {
        spanPersonajeEnemigo.innerHTML = `Toph 🌱`
    } else {
        spanPersonajeEnemigo.innerHTML = `Zoka 🍃`
    }
}

function ataquePunio(){ //modificamos la variable global ataqueJugador
    ataqueJugador = `Punio`
    ataqueAleatorioEnemigo()
}

function ataquePatada(){ //modificamos la variable global ataqueJugador
    ataqueJugador = `Patada`
    ataqueAleatorioEnemigo()
}

function ataqueBarrida(){ //modificamos la variable global ataqueJugador
    ataqueJugador = `Barrida`
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){ //ahora ocupamos la variable global nueva le decimos el ataque y necesitamos la función aleatoria 
    let ataqueAleatorio = aleatorio (1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = `Punio`
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = `Patada`
    } else {
        ataqueEnemigo = `Barrida`
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById(`vidas-jugador`)
    let spanVidasEnemigo = document.getElementById(`vidas-enemigo`)

    document.getElementById("reglas-del-juego").style.display = "none"

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == `Punio` && ataqueEnemigo == `Barrida`){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
    } else if (ataqueJugador == `Patada` && ataqueEnemigo == `Punio`){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
    } else if (ataqueJugador == `Barrida` && ataqueEnemigo == `Patada`){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML =vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    //revisar vidas
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        //Ganamos
        crearMensajeFinal("FELICITACIONES!!! HAS GANADO")
    }else if (vidasJugador == 0){
        //Perdimos
        crearMensajeFinal("QUE PENA, HAS PERDIDO")
    }
}

function crearMensajeFinal(resultado){
    let sectionReiniciar = document.getElementById(`reiniciar`)
    sectionReiniciar.style.display = "block"
    let sectionMensaje = document.getElementById(`mensajes`)
    let parrafo = document.createElement(`p`)

    parrafo.innerHTML = resultado
    
    sectionMensaje.appendChild(parrafo)

    let botonPunio = document.getElementById(`boton-punio`) 
    botonPunio.disabled = true
    let botonPatada = document.getElementById(`boton-patada`)
    botonPatada.disabled = true
    let botonBarrida = document.getElementById(`boton-barrida`)
    botonBarrida.disabled = true
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById(`mensajes`)
    let parrafo = document.createElement(`p`)

    parrafo.innerHTML = `Tu personaje atacó con ` + ataqueJugador + `, el personaje del enemigo atacó con ` + ataqueEnemigo + ` ` + resultado
    
    sectionMensaje.appendChild(parrafo)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min +1) + min)
}

window.addEventListener(`load`,iniciarJuego)


