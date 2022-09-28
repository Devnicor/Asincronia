var suma = 0;
var promedio = 0;
var moda = 0;
var mediana = 0;
var numerador = 0;
var potencia;
var exponente = 2;
var sumatoria = 0;
var desv = 0;
var n = 5;
var arr = [5];
for (let i = 0; i < n; i++) {
    arr[i] = Math.round((Math.random()) * 100);
}
var longitud = n;
console.log(`Arreglo generado: ${arr}`);


for (let i = 0; i < longitud; i++) {
    var numeroActual = arr[i];
    suma = suma + numeroActual;

    if (arr[i] = arr[i]) {
        moda = arr[i];
    }
}
promedio = suma / longitud;



for (let i = 0; i < longitud; i++) {
    numerador = arr[i] - promedio;
    potencia = pow(numerador, exponente);
    sumatoria = potencia + sumatoria;
}
desv = sqrt(sumatoria / n);
console.log(`La suma de los elementos es: ${suma}`);
console.log(`El promedio de los elementos es: ${promedio}`);
console.log(`El valor mayor de los elementos es: ${Math.max(...arr)}`);
console.log(`El valor menor de los elementos es:${Math.min(...arr)}`);
console.log(`La moda del arreglo es el valor: ${moda}`);
console.log(`La desviacion estandar del arreglo es: ${desv}`);