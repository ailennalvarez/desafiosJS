//nota final alumnos
let resultado = 0;
let notaFinal = 0;

function suma(nota1, nota2, nota3) {
    resultado = (nota1 + nota2 + nota3);
    notaFinal = (resultado/3);
}
function mostrar(notaFinal){
    console.log(notaFinal)
   
}
suma(8,4,10);
mostrar(notaFinal);

//Calculo de Iva
const suma1 = (a,b) => a + b;

const iva = x => x* 0.21;
let precioProducto = 50;

let precioFinal = suma1(precioProducto,iva(precioProducto));
console.log(precioFinal);
