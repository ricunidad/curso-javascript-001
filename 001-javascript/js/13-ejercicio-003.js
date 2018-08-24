"use strict"

/**
 * hacer un programa que muetre todos los numeros entre dos numeros introduciodos por el usuario
 */

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));


document.write("<h2> de: "+numero1+" a: "+numero2+" hay los siguientes numeros:</h2>");

for(var i = numero1; i <= numero2; i++){
    document.write(i+", ");
}