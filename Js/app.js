const containerProdutos = document.getElementById("container-Productos")
let agregadoProductos = [];

cargarEventos();

function cargarEventos(){
    containerProdutos.addEventListener('click', agregarProducto);
}

function  agregarProducto(){
    console.log('se hizo click');
}



class Producto {
    constructor(id, imagen, nombre, precio){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
        this.subtotal = 0;
    }

    obtenerTotal(){
        this.subtotal = this.precio * this.cantidad;
    }
}





















