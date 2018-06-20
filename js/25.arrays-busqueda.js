'use strict'

// Arrays o arreglos

var nombre = "Reynaldo";

var nombres = ["Victor Robles", "Reynaldo Choque", "David Castro", "Lionesl Messi", 1, true ];

var lenguajes =  new Array("php", "js", "go", "java");

//console.log(nombres[2]);

/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

while(elemento >= nombres.length){
    elemento = parseInt(prompt("Que elemento del array quieres?, no puede ser mayor a "+(nombres.length -1)+":", 0));
}

alert(nombres[elemento]);
*/

document.write("<h1>Nombres de la lista</h1>");

for(var i = 0; i < nombres.length; i++){
    document.write(nombres[i]+"<br/>")
}

document.write("<h1>Lenguajes 1</h1>");

for(let indice in lenguajes ){
    document.write(lenguajes[indice]+"<br/>")
}

document.write("<h1>Lenguajes de progamación de 2018</h1>");

lenguajes.forEach((nombre, indice) => {
    document.write(indice+": "+nombre+"<br/>")
});

// Busquedas
/**
var Busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "php"
})
 */
var Busqueda = lenguajes.find(lenguaje => lenguaje == "php");

console.log(Busqueda);

var Indice = lenguajes.findIndex(lenguaje => lenguaje == "php");

console.log(Indice);

var precios = [45, 68, 55,79];
var busqueda = precios.some(precio => precio >= 50);

console.log(busqueda);
