"use strict"

/**
 * Utilizando un bucle, mostrar la suma y la media de los numero introducidos
 * hasta intoducir un numero negativo y ahí mostrar el resultado
 */

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numero hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        //suma = suma + numero;
        suma += numero;

        contador ++;
    }

    console.log("suma: "+suma+ ", contador: "+contador);

}while(numero >= 0)


alert("La suma es:" + suma);
alert("La media de los numero es "+(suma/contador));