let numero = prompt("Ingrese un numero");

let numeroFinal = parseInt(numero);

if (numeroFinal > 100) {
    console.log("El numero es " + numeroFinal);
} else {
    console.log("Ingrese otro numero");
}

let texto = prompt("Ingrese un saludo");

if ((texto == "Hola") || (texto == "HOLA")) {
    console.log("Bienvenido");
}else{
    console.log("Pruebe con otro saludo");
}

let numFinal = parseInt(prompt("Ingrese un numero"));



if ((numFinal>10) && (numFinal<50)) {
    console.log("El numero es correcto");
} else {
    console.log("Ingrese otro numero");
}