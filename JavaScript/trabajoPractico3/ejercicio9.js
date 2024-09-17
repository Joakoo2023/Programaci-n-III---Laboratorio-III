//Función para convertir grados Celsius en grados Fahrenheit
function convertirCelsiusAFahrenheit(C){
    return C * 1.8 + 32;
}
//Función para imprimir los resultados obtenidos de la conversión
function resultadoFahrenheit(C){
    console.log("El valor ingresado en Celsius: " + C + "°C convertido a Fahrenheit es: " + convertirCelsiusAFahrenheit(C) + "°F");
}

//Pruebas
resultadoFahrenheit(30);
resultadoFahrenheit(10);
resultadoFahrenheit(-5);