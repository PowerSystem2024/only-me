'use strict';

miFuncion();

function miFuncion() {
    console.log('¡Saludos desde mi funcion!');
}

const myFuncion = function () {
    console.log('¡Saludos desde mi funcion anonima!');
};

const miFuncionFlecha = () => {
    console.log('¡Saludos desde mi funcion flecha!');
};
miFuncionFlecha();

const saludar = () => console.log('Saludos a todos desde esta funcion flecha.');
saludar();

const saludar2 = () => {
    return 'Saludos desde la funcion flecha dos';
};
console.log(saludar2());

const saludar3 = () => 'Saludos desde la funcion flecha tres.';
console.log(saludar3());

const regresaObjeto = () => ({ Nombre: 'Ana', Apellido: 'Rios' });
console.log(regresaObjeto());

const funcionParametros = mensaje => console.log(mensaje);
funcionParametros('Saludos desde la funcion con parametros.');

const funcionParametrosClasica = function (mensaje) {
    console.log(mensaje);
};
funcionParametrosClasica('Saludos desde la funcion con parametros clasica.');

const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Otra forma de trabajar con la funcion flecha.');

const funcionConParametros2 = (op1, op2) => op1 + op2;
console.log(funcionConParametros2(3, 5));

const funcionConParametros3 = (op1, op2) => {
    const resultado = op1 + op2;
    return resultado;
};
console.log(funcionConParametros3(2, 8));
