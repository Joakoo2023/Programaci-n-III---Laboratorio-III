// Función que deshabilita el campo de texto
function deshabilitarCampo() {
    document.getElementById('campoTexto').disabled = true;  // Deshabilita el campo de texto al cambiar la propiedad 'disabled' a true
}

// Función que habilita el campo de texto
function habilitarCampo() {
    document.getElementById('campoTexto').disabled = false;  // Habilita el campo de texto al cambiar la propiedad 'disabled' a false
}

// Añade un listener al botón con id 'botonDeshabilitar', que al hacer clic ejecuta la función 'deshabilitarCampo'
document.getElementById('botonDeshabilitar').addEventListener('click', deshabilitarCampo);

// Añade un listener al botón con id 'botonHabilitar', que al hacer clic ejecuta la función 'habilitarCampo'
document.getElementById('botonHabilitar').addEventListener('click', habilitarCampo);
