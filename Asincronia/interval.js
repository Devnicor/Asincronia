//Qué se diferencia entre el uso de let y var en un ciclo declarado:
for (let j = 0; j < 8; j++) {
    setTimeout(() => {
        console.log(j)
    }, 1000*j);
}

//setInterval ejecuciones repetidas en espaciuos de tiempo:
setInterval(() => {
    console.log("Amo el SENA")
}, 1000);

//Repetición de intervalo cada 2 segundos:
let timerId = setInterval(() => console.log("tick"), 2000);

//Detener despues de 5 segundos:
setTimeout(() => {
    clearInterval(timerId);
}, 5000);

//Arreglo de 10 elementos infinito, impresión de cada elemento usando setInterval y operador ternario:
var vec = [];
for (let i = 0; i < 10; i++) {
    vec[i] = Math.round(Math.random() * 100);
}
var k = 0;
setInterval(() => {ñ
    console.log(vec[k])
    k++;
    k == 10 ? k = 0: k=k
}, (1000));