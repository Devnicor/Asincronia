class Productos {
    constructor(nombre, precio, stock){
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get stock(){
        return this._stock;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    set stock(stock){
        this._stock = stock;
    }
}

var tienda = [];
const tarjeta1 = new Productos ('RTX 3060 AHORUS', 1, 6);
const tarjeta2 = new Productos ('GTX 1050 ti', 2, 15);
const tarjeta3 = new Productos ('RTX 30500', 3, 4);
const tarjeta4 = new Productos ('WX 2100', 4, 9);
const tarjeta5 = new Productos ('RTX 3080 Ti Trinity', 5, 2);

tienda.push(tarjeta1, tarjeta2, tarjeta3, tarjeta4, tarjeta5);

function mostrarDatos(callback1, callback2, callback3, elementos) {
    console.log(`Productos de la tienda: ${tienda.nombre}`);

}

function promPrecios() {
    setTimeout(() => {
        var suma = 0;
        for (let i = 0; i < tienda.length; i++) {
            suma += tienda[i].precio;
        }
        prom = suma / tienda.length;
        console.log(`El promedio de los precios de los productos es: ${prom}`);
        console.log(typeof(tienda));
    }, 2000);
}

promPrecios();
console.log(tienda);


function ganancias() {
    setTimeout(() => {
        
    }, timeout);
}

function inventario(params) {
    setTimeout(() => {
        
    }, timeout);
}