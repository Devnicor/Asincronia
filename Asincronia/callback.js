//Utilizando callback para llamar funciones
function pruebaCallback(callback, name){
    setTimeout(() => {
        console.log("Dentro de prueba Callback")
    }, 2000);
    callback(name);
}

function saludo(nombre) {
    console.log(`Hola ${nombre}`);
}
pruebaCallback(saludo, 'NICO');

//Más de un callback:
function pruebaaCallback(callback1, callback2, name){
    callback1(name);
    setTimeout(() => {
        console.log("Dentro de prueba Callback")
    }, 2000);
    callback2(name);
}

function saludos(name) {
    console.log(`Hola ${name}`);
}

function cuentaLetras(name) {
    console.log(name.length);
}
pruebaaCallback(saludos, cuentaLetras, 'NICO');