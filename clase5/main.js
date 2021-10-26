//producto

const producto1 ={
    nombre: "Brazalete",
    categoria: "Accesorio",
    material: "cuero",
    precio:"$500"
}

console.log(producto1);

//Constructor

function Producto(nombre,categoria,material,precio){
    this.nombre= nombre;
    this.categoria=categoria;
    this.material=material;
    this.precio=precio;
}

const cinturon = new Producto("Cinturon","cuero","accesorio mujer","$1000");
console.log(cinturon);

const crearProducto =()=>{
    let nombreProducto= prompt("Ingrese el accesorio que le gustaria tener");
    let materialProducto= prompt("¿ de que material le gustaria que sea?");
    let precioEst= Number(prompt("¿que precio le parece adecuado?"));
    let categoriaProducto = prompt("Ropa o accesorio");

    const productoC = new Producto(nombreProducto,materialProducto,precioEst,categoriaProducto);
    console.log(productoC);
}

