//Pide al usuario que ingrese un número
let numeroIngresado = prompt("Ingresa un número y te dire si es par o impar");
//Convierte el valor de la variable numeroIngresado en número, ya que promp devuelve un valor de tipo string
let numero = Number(numeroIngresado);
//La función isNaN verifica que el valor ingresado sea válido
if(isNaN(numero)){
    console.log("Ingrese un número válido")
} else {
    //Determina si el número ingresado es par o impar
    if (numero % 2 === 0){
        console.log("El número ingresado es par")
    } else {
        console.log("El número ingresado es impar")
    }
}