'use strict'

// Transformas cadenas
var numero = 55;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

console.log(dato);

// Calcular longitud

var nombre = "Reynaldo Rodrigo Choque Vicente";
    nombre = ["hola", "hola"]

console.log(nombre.length);

// concatenar

//var texto_total = texto1+" "+texto2;
var texto_total = texto1.concat(" ", texto2);
console.log(texto_total);

