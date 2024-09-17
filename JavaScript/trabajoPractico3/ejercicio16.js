window.onload = function(){

    //Selecciona los elementos de la lista 
    var elementos= document.querySelectorAll('li');

    //Añade un evento de clcik a cada elemento
    elementos.forEach(function(elemento){
        
        elemento.addEventListener('click', function(){

            //Muestra el texto de cada elemento en la consola
            console.log(this.textContent);
        })
    })
}