// Productos 

class Producto {
    constructor(modelo,precio,color){ 
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }
}

listaProductos = [];

listaProductos.push(new Producto("Iphone xs",550,"rosa"));
listaProductos.push(new Producto("Samsung S10",500,"blanco"));
listaProductos.push(new Producto("iphone XR",600,"amarillo"));
listaProductos.push(new Producto("Samsung S20",700,"transparente"));


const agregarProducto = () => {
    let modeloAgregado = prompt("que modelo le gustria que agreguemos a la tienda?");
    let precioAgregado = prompt("que precio le gustaria que poseea?");
    let colorAgregado = prompt("que color le gustria que tenga?");
    let productoAgregado = new Producto(modeloAgregado,precioAgregado,colorAgregado);
    listaProductos.push(productoAgregado);
    console.log(listaProductos);
}

for (const objetos of listaProductos) {
    console.log("El modelo es " + objetos.modelo + " y el precio es " + objetos.precio + " y el color es " + objetos.color);
}

//ordenar por precio de menor a mayor

let ordenarPorPrecio = [];

ordenarPorPrecio = listaProductos.sort(function(a,b){
    return a.precio - b.precio;
});
console.log("Precio mas barato a mas caro")

for (const objetos of ordenarPorPrecio) {   
    console.log("El modelo es " + objetos.modelo + " y el precio es " + objetos.precio + " y el color es " + objetos.color);
}


