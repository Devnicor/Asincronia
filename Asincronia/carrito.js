//subtotal = precio * cantidad de prodcuto 
//presupuesto = valor fijo 
//funcion agregar = si presupuesto <= subtotal agregar, decir dinero sobrante. sino avisar y cerrar compra 
//Producto = nombre, precio PARAMETRO  

class Productos {
    constructor(nombre, precio, stock, acumulado) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
        this._acumulado = acumulado;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get stock() {
        return this._stock;
    }
    get acumulado() {
        return this._acumulado;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set stock(stock) {
        this._stock = stock;
    }
    set acumulado(acumulado) {
        this._acumulado = acumulado;
    }
}

var carrito = [], cantidad, presupuesto, subt, acumulado
presupuesto = Math.round(Math.random() * 100);
console.log(`Su presupuesto es: ${presupuesto}`);

const tarjeta1 = new Productos('RTX 3060 AHORUS', 10, 2,);
const tarjeta2 = new Productos('GTX 1050 ti', 20, 3,);
const tarjeta3 = new Productos('RTX 3050', 30, 4,);
const tarjeta4 = new Productos('WX 2100', 40, 9,);
const tarjeta5 = new Productos('RTX 3080 Ti Trinity', 50, 2,);


function tienda() {
    new Promise((resolve, reject) => {
        if (presupuesto >= 10) {
            carrito.push(tarjeta1)
            resolve(carrito);
            console.log(carrito);
        } else {
            reject('Oops... No hay presupuesto para compras')
        }
    })
}

async function calcularPresupuesto() {
    const total = await tienda();
    var totalCarrito = 0;
    var saldo = 0;

    try{
        
        for (let i = 0; i < carrito.length; i++) {
            totalCarrito = (tarjeta1.precio * (tarjeta2.stock-1));
            console.log('Productos añadidos:' + carrito);
        }
        console.log(`El total del carrito es: ${totalCarrito}`)
        saldo = presupuesto - totalCarrito;

        if (totalCarrito > presupuesto) {
            console.log(`Su presupuesto no alcanza, compra cancelada su saldo es: ${saldo}`)
        } else {
            console.log(`Puede seguir comprando aun tiene: ${saldo}`);
            carrito.push(tarjeta2);
        }
    }

    catch (err) {

    }
}
calcularPresupuesto()









// .then(value => {
//     tarjeta1.acumulado = (tarjeta1.precio * (tarjeta1.stock-2))
//     value.push (`Producto: ${tarjeta1.nombre}, valor total: ${tarjeta1.acumulado}`);
//     console.log(value);
//     return value
// })
// .then(value => {
//     tarjeta2.acumulado = (tarjeta2.precio * (tarjeta2.stock-6))
// })
// .then(value => {

// })
// .then(value => {

// })
// .then(value => {

// })
// .then(value => {

// })
// .catch(err => {

// })

// function budget(Productos) {
//     if ((carrito.acumulado) < presupuesto) {
//         console.log(`Presupuesto actual: ${presupuesto - carrito.acumulado}`);
//         console.log('Puede seguir agregando productos');

//     } else {
//         console.log(`Presupuesto actual: ${presupuesto}`);
//         console.log('No es posible agregar mas productos, puede hacer el pago de lo que ya tiene');
//     }
// }