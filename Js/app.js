let inicioCuenta; confirm ('Hola, eres un Usuario Registrado?')


do{
    inicioCuenta= prompt('Ingrese Nombre Ususario')
} while(inicioCuenta == '' ||  inicioCuenta == null);


switch(inicioCuenta) {

    
    case 'mariano':
        alert ('Bienvenido MARIANO');
        break;

    case 'marisa':
        alert ('Bienvenido MARISA');
        break;

    default:
        alert ('Lo siento no estas registrado');
        break;
}
let id = 0;
let nombre = "";
let precio = 0;

const agregadoProductos = [];

const Productos = [
    { id: 1, nombre: 'hamburguesa clasica', precio: 500},
    { id: 2, nombre: 'Pizza napo', precio: 700},
    { id: 3, nombre: 'empanadas arabes', precio: 600},

];

class Producto {
    constructor(){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}



// console.log(Productos);

function ingresarProducto(){
    let nuevoProducto;

    id = ++ id;
    nombre = prompt(`Introduzca el nombre del producto`);
    precio = prompt(`introduzca el precio del prodcuto`);
    nuevoProducto = new Producto (id, nombre, precio);
    console.log(nuevoProducto);
    Productos.push(nuevoProducto);


}

localStorage.setItem('Productos', JSON.stringify(Productos));
const recuperarProductos = JSON.parse(localStorage.getItem('Productos'));
console.log(recuperarProductos);

localStorage.setItem('Agregar', JSON.stringify(nuevoProducto));
const miProducto = JSON.parse(localStorage.getItem('Agregar'));
console.log(miProducto);




ingresarProducto();















