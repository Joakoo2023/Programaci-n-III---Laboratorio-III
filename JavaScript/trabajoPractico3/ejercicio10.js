//Objeto persona y sus atributos
let persona = {
    nombre:"Joaquin",
    edad:21,
    ciudad:"Las Heras",
    cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad;
    }
};

//Atributos actuales de la persona
console.log("Anrtes de cambiar de Ciudad")
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

//Cambio de Ciudad
persona.cambiarCiudad("Luján de Cuyo");

//Atributos con el cambio de ciudad
console.log("Después de cambiar de Ciudad")
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);