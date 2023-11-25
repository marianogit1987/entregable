const containerProdutos = document.getElementById("container-Productos")
let agregadoProductos = [];

cargarEventos();
//Trato de hacer un click en los diferentes container-Productos y solamente me hace click en el primer contenedor
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





















