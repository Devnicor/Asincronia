var arr = [], x = 4, prom, num = 0, potencia, sumatoria = 0, desv, exponente = 2;

function desviacion(callback1, callback2, callback3, callback4, vector, tamaño) {
    console.log("Desviacion estandar de un arreglo, operacion en proceso...");
    callback1();
    callback2();
    callback3();
    callback4();
}

function arreglo() {
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
            arr[i] = Math.round((Math.random()) * 100);
        }
        console.log(`Arreglo generado: ${arr}`);
    }, 1000);
   
}

function promeedio() { 
  setTimeout(() => {
    var suma=0;
    for (let i = 0; i < x; i++) {
        suma += arr[i];
    }
    prom = suma / x;
    console.log(`El promedio del arreglo necesario para la desviacion es: ${prom}`);
  }, 2000);  
}

function numeraador() {
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
            num = arr[i] - prom;
            potencia = Math.pow(num, exponente);
            sumatoria += potencia;
        }
        console.log(`El numerador para el cálculo de la desviacion es: ${sumatoria}`);
    }, 3000);
}

function radicacion() {
    setTimeout(() => {
        desv = Math.sqrt(sumatoria / x);
        console.log(`La desviacion estandar del arreglo es: ${desv}`);
    }, 5000);
}

desviacion(promeedio, numeraador, radicacion, arreglo, arr, x)