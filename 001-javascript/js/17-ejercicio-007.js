"use strict"

/**
 * tabla de multiplicar de un numero introducido por pantalla
 */

var numero = parseInt(prompt("Introduce un numero",1));

for(var i = 1; i <= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}


// todas las tablas de multiplicar
for(var j = 1; j<= 10; j++){
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+j+" = "+(i*j)+"<br/>");
    }
}