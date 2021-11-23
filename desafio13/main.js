
class Iphone{
    constructor(descripcion,precio,stock){
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;

    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}
let productosIphone=[];


const agregarFunda =[{descripcion:"Silicon case",precio:100,stock:10},
{descripcion:"Silicon case Amarilla",precio:100,stock:10},
{descripcion:"Silicon case Roja",precio:100,stock:10}];
$(document).ready(function () {
    $(".btnComprar").click(function (e) { 
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        //Animaciòn de respuesta de compra
        $(e.target).parent().slideUp("slow");
    });
});

for (const productos of agregarFunda) {
    $("body").append(`<div>
                            <h4> Producto : ${productos.descripcion}</h4>
                            <b> Precio: ${productos.precio}</b>
                            <button id="btn ${productos.precios}" class="btnComprar"> Agregar al carrito </button>
                            </div>`);
    $(`#btn${productos.precio}`).on('click',function(){
        console.log(`Compraste ${producto.nombre}`);
});
}
