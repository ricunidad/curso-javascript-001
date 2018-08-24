"use strict"

//switch

var edad  = 18;
var imprimir = ""

switch(edad){
    case 18:
        imprimir = "acabas de cumplir la mayoria de edad";
        break;
    case 25:
        imprimir = "ya eres adulto";
        break;
    case 40:
        imprimir = "crisi de los 40";
        break;
    case 75:
        imprimir = "eresun anciano";
        break;
    default:
        imprimir = "Edad no registrada";
}

console.log(imprimir);