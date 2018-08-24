'use strict'

// Ambito de variables



function holaMundo(texto){
    console.log(texto);
    console.log(numero.toString());

    var hola_mundo = "Hola mundo";
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo, soy una variable global";
holaMundo(texto);

// Esto no es  valido porque la variable sol esta disponible dentro de la funcion
//console.log(hola_mundo);