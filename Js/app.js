const containerProduct = document.getElementById ("container-productos")
const containerCart = document.querySelector(".modal-cart")
const carrito = document.getElementById('carrito')
const modal = document.getElementById('window-cart')
const btnClose = document.getElementsByClassName('close')[0]
let productosCarrito = [];

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

cargarEventos();

function cargarEventos(){
    containerProduct.addEventListener('click', agregarProducto);

    document,addEventListener('DOMContentLoaded', () => {
        renderizarProductos();
    });

    carrito.onclick = function () {
        modal.style.display = 'block';
    };

    btnClose.onclick = function() {
        ocultarmodal();
    };

    window.onclick = function(e) {
        if (e.target == modal){
            ocultarmodal();
        };
    }
}


function ocultarmodal(){
    modal.style.display = 'none';
}

function  agregarProducto(e){
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const productoAgregado = e.target.parentElement;

        leerDatosProducto(productoAgregado);
    }
}

    function leerDatosProducto (producto) {
        const datosProducto = new Producto(
            parseInt(producto.querySelector('a').getAttribute('id')),
            producto.querySelector('img').src,
            producto.querySelector('h4').textContent,
            Number(producto.querySelector('p').textContent.replace('$', '')));

            datosProducto.obtenerTotal();

           agregaralCarrito(datosProducto);
    }

    function agregaralCarrito(productoAgregar){
        // console.log(productoAgregar);
        // console.log(productosCarrito);

        const existeEnCarrito = productosCarrito.some((producto) =>producto.id === productoAgregar.id);

        if (existeEnCarrito) {
            const productos = productosCarrito.map((producto) => {
                if
                (producto.id === productoAgregar.id) {
                    producto.cantidad++;
                    producto.subtotal = producto.precio * producto.cantidad;

                    return producto;
                } else {
                    return producto;
                }                
            });

            productosCarrito = productos;
        } else{
            productosCarrito.push(productoAgregar);

        }
        console.log(productosCarrito);
        mostrarProductosCarrito();
}

function mostrarProductosCarrito() {

    limpiarHtml();

    productosCarrito.forEach((producto) => {
        const {id, imagen, nombre, precio, cantidad, subtotal} = producto;

        const div = document.createElement('div')
        div.classList.add('contenedor-producto');
        div.innerHTML = `
                            <img src="${imagen}">
                            <p>${nombre}</p>
                            <p>$${precio}</p>
                            <p>${cantidad}</p>
                            <p>$${subtotal}</p>
                            <a href="#" class="eliminar-producto" id= "${id}"> X </a>
                        `;
        containerCart.append(div);
    });
}

function limpiarHtml(){
    while (containerCart.firstChild) {
        containerCart.removeChild(containerCart.firstChild)
    }
}

    function renderizarProductos(){
        products.forEach((producto) =>{
            const divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML += `
            <img src="../img/${producto.img}" alt="${producto.nombre}" />
            <h4>${producto.nombre}</h4>
            <p>$ ${producto.precio}</p>
            <a id= ${producto.id} class='boton agregar-carrito' href= '#'>Agregar </a>
            
        `;

        containerProduct.append(divCard);
            
                
        });
    }

    


















