// Define una función llamada 'cambiarColor'
function cambiarColor(){
    // Selecciona todos los elementos <p> en el documento y los guarda en la variable 'parrafos'
    var parrafos = document.querySelectorAll('p');
    
    // Itera sobre cada elemento en la colección 'parrafos'
    parrafos.forEach(function(parrafo){
        // Cambia el color del texto del párrafo a azul
        parrafo.style.color = 'blue';
    });
}
