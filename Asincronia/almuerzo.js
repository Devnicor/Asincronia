//Pasta bolognesa con JavaScript XD

function Bolognesa(callback1, callback2, callback3, callback4, callback5, callback6) {
    setTimeout(() => {
        callback1();
    }, 1000);
    setTimeout(() => {
       console.log('La pasta ha sido preparada, buen provecho'); 
    }, timeout);
}

function hervirAgua() {
    console.log('Agua hirviendo con media cucharada de aceite en una olla...');
}

function cocinarPasta() {
    console.log('Añadiendo y cocinando pasta por 10 minutos en la olla...');
}

function sarten() {
    console.log('Calentando sarten con aceite por 3 minutos...');
}

function carne() {
    console.log('Sofriendo y revolviendo carne molida por 5 minutos...');
}

function salsa(params) {
    console.log('Picando vegetales, añadiendolos en la sarten con agua y cocinando por 2 horas y media...');
}

function mezclarIngredientes() {
    console.log('Se mezcla la pasta con la salsa mezclada de la carne, revolviendo a fuego lento ´por 2 minutos...');
}