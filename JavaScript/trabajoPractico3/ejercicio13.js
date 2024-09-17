//Array donde se almacenan los 10 primeros números pares
let pares=[];

//Bucle for para almacenar los 10 primeros números pares en el array pares
for(let i=0;i<=20;i++){
    if(i % 2 === 0){
        pares.push(i);
    }
}

//Mostramos el array pares
console.log("Los primeros 10 números pares son: " + pares);