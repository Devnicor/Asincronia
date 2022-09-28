//Escriba un setTimeout dentro de un ciclo que se repita n veces, imprima la variable del ciclo dentro del setTimeout, luego en otra ejecucion y fuera del setTimeout explique el comportamiento. Alterne el ejercicio usando el let y var en la variable del ejercicio.
var ciclo1 = "Nel perro"
let ciclo2 = "Matame esa"
let frase = "simon"
for (let i = 0; i< 6;i++) {
    setTimeout(function() {
        console.log(ciclo1);
        console.log(ciclo2);
    }, 3000);
}
console.log(frase);


//Usar un arreglo para un setTimeout que dure 3 segundos, en ese tiempo llenar el vector a traves de una funcion

var n =[];
x = 5;

function uno(){
    for (let i = 0; i < x; i++) {
        n[i] = 1
    }
    console.log(`Arreglo sin timeout: [${n}]`)
}

function aleatorios(){
    for (let i = 0; i < x; i++) {
        n[i] = Math.round(Math.random() * (25-5) + 5)
    }
    console.log(`Arreglo con timeout: [${n}]`)
}

uno(n,x);
setTimeout(aleatorios, 3000, n, x);

//Receta con secuencias y tiempos usando callbacks