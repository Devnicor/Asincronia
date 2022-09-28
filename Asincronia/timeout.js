console.log("hola");
setTimeout(() => {
    console.log("interrumpcion por timeout");
}, 2000);

setTimeout(function() {
    console.log("setTimeout con funcion clasica");
}, 1000);

function externa() {
    console.log("Soy externa al timeout");
}

setTimeout(externa, 500)

function saludos() {
    console.log("Hola mundo");
}
setTimeout(saludos);
console.log("Debo ejecutarme antes del time out");
function saludos(nombre, rol){
    console.log(`Hola mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
}

saludos("Juan", "Mecanico");
setTimeout(saludos, 3000, "Nicolas", "Plomero");