"use strict"

/**
 * mostrar todos los numeros divisores de un numero introducidos en prompt
 */

var numero = parseInt(prompt("Introduce un numero",1));

document.write("<h2>Dvisores de : "+numero+"</h2>");

for(var i = 1; i <= numero; i++){
    if(numero%i == 0){
        document.write(i+", ");
    }
}