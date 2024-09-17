//Objeto Libro y sus atributos
let libro = {
    titulo:"El Quijote",
    autor:"Miguel de Cervantes Saavedra",
    año:1605,
    //Método para calcular la antiguedad
    antiguedad: function(){
        let añoActual = new Date().setFullYear(); //Obtenemos el año actual
        let edad = añoActual - this.año; //Obtenemos la diferencia entre los años para saber si es antiguo o reciente
        if (edad>=10){
            console.log("El libro '" + this.titulo + "' es antiguo")
        } else {
            console.log("El libro '" + this.titulo + "' es reciente")
        }
    } 
}
//Llama al método para saber si el libro es antiguo o reciente
libro.antiguedad();