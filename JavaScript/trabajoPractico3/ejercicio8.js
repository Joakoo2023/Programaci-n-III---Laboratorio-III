//Función que retorna si el numero que recibe por parametro es par o no
function esPar(numero){
    return numero % 2 === 0
}

function resultado(numero){
    if (esPar(numero)){
        console.log("El número " + numero + " es par")
    } else {
        console.log("El número " + numero + " es impar")
    }
}

//Pruebas
resultado(4);
resultado(0);
resultado(-50);
resultado(1263);
resultado(9);