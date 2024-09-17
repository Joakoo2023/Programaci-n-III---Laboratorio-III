//Declaración de variable
let numeroIngresado;

//Bucle donde si el usuario no ingresa un numero mayor a 100
do{
    //Pide al usuario que ingrese un número
    numeroIngresado = prompt("Ingresa un número mayor que 100");

    //Convierte el valor de la variable numeroIngresado en número, ya que promp devuelve un valor de tipo string
    numeroIngresado = Number(numeroIngresado);

}while(isNaN(numeroIngresado) || numeroIngresado <= 100);

//Imprimer el numero ingresado mayor que 100
console.log("El número ingresado es = " + numeroIngresado);