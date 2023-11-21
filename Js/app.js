const carrito = document.getElementsByClassName("Agregar al carrito")
let agregadoProductos = [];


function cargaralCarrito  () {
    carrito.addEventListener('click', "Agregar al carrito")
    console.log(cargaralCarrito)
}




// let id = 0;
// let nombre = "";
// let precio = 0;



// const Productos = [
//     { id: 1, nombre: 'hamburguesa clasica', precio: 500},
//     { id: 2, nombre: 'Pizza napo', precio: 700},
//     { id: 3, nombre: 'empanadas arabes', precio: 600},

// ];

    // for(const producto of Productos) {
    //     let contenedor = document.createElement("div");
    //     contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
    //                             <p> Producto: ${producto.nombre}</p>
    //                             <b> $ ${producto.precio} </b>`;

    //     document.body.appendChild(contenedor);

    // }                           



class Producto {
    constructor(id, imagen, nombre, precio){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
}





// console.log(Productos);

// function ingresarProducto(){
//     let nuevoProducto;

//     id = ++ id;
//     nombre = prompt(`Introduzca el nombre del producto`);
//     precio = prompt(`introduzca el precio del prodcuto`);
//     nuevoProducto = new Producto (id, nombre, precio);
//     console.log(nuevoProducto);
//     Productos.push(nuevoProducto);

//     localStorage.setItem('Agregar', JSON.stringify(nuevoProducto));
//     const miProducto = JSON.parse(localStorage.getItem('Agregar'));
//     // console.log(miProducto);

// }





// localStorage.setItem('Productos', JSON.stringify(Productos));
// const recuperarProductos = JSON.parse(localStorage.getItem('Productos'));
// console.log(recuperarProductos);



// localStorage.removeItem('Agregar')




// ingresarProducto();















