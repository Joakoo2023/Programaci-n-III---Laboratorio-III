//Array numeros donde se almacenan numeros del 1 al 10
let numeros = [1,2,3,4,5,6,7,8,9,10];

//Array vacio donde se van a almacenar los resultados de las multiplicaciones
let resultados = [];

//Bucle for donde se almacenan los resultados en el array resultados
for(let i=0; i<numeros.length; i++){
    resultados.push(numeros[i]*2);
}

//Mostramos el array original y el array con los resultados
console.log("Números originales: " + numeros);
console.log("Números multiplicados por 2: " + resultados);