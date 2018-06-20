'use strict'

/**
 * 1.- pida 6 numeros por pantalla y metalos en un array
 * 2.- Mostrar el Array entero en el cuerpo de la pagina y en la consola
 * 3.- ordenarlo y mostrarlo
 * 4.- invertir el orden y mostrarlo
 * 5.- mostrar cuantos elementos tiene el array
 * 6.- busqueda de un valor introducido por el usuario (nos dice si lo encuentra y su indice)
 */

function mostrarArray(contenidoArray){
    contenidoArray.forEach((nombre, indice) => {
        document.write(indice+": "+nombre+"<br/>")
    });
}

var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("introduce un numero:", 0));
}

console.log(numeros);

document.write("<h1>Listado inicial</h1>");
mostrarArray(numeros);


// Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
console.log(numeros);

document.write("<h1>Listado ordenado</h1>");
mostrarArray(numeros);

// invertir y mostrar
numeros.reverse();
document.write("<h1>Listado invertido</h1>");
mostrarArray(numeros);

// contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

// buscar un valor intriducido por el usuario
var busqueda = parseInt(prompt("Busca un numero:", 0));

var buscado = numeros.find(numero => numero == busqueda);
if(buscado && buscado != -1){
    document.write("<h1>Encontrado en la posicion "+numeros.findIndex(lenguaje => lenguaje == busqueda) +"</h1>")
}
document.write()