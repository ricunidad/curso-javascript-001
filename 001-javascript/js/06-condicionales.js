'use strict'

// Condicional IF

var edad1 = 30;
var edad2 = 12;
if(edad1 > edad2){
    console.log("edad 1 es mayor a la edad 2");
}else{
    console.log("edad 1 es inferior a la edad 2");
}

/**
 * operadores relacionales
 * mayor: >
 * menor: <
 * mayor o igual: >=
 * menor o igual: <=
 * igual: ==
 * distinto: !=
 */


var edad = 15;
var nombre = "Reynaldo Choque";

if(edad >= 18){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

// operadore logicos
/**
 * and (Y) : &&
 * or (o): ||
 * negacion: !
 */

var year = 2018;

if (year != 2016){
    console.log("El año no es 2016");
}

//  AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}

// OR 

if(year ==2008 || year == 2018){
    console.log("el año acaba en 8");
}