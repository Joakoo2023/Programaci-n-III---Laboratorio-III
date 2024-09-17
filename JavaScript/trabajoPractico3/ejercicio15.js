// Función que muestra una alerta con el valor ingresado en el campo de texto
function mostrarAlerta() {
    // Obtiene el valor ingresado en el campo de texto con id 'texto'
    var valorIngresado = document.getElementById("texto").value;
    
    // Muestra una alerta con el valor ingresado concatenado en el mensaje
    alert("Has ingresado: " + valorIngresado);
}
