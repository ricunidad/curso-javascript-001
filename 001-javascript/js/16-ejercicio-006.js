"use strict"

/**
 * nos dice si el numero es par o impar o no es un numero
 */

var numero = parseInt(prompt("Introduce un numero",0));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero valido",0));
}

if(numero%2 == 0){
    alert("el numero es par");
}else{
    alert("el numero es impar");
}