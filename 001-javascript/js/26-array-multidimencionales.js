'use strict'

var categorias = ["Acción", "Terror", "Comedia"]
var peliculas = ["La verdad duele", "La vida es bella", "Rapidos y furiosos"];

var cine = [categorias, peliculas];


//console.log(cine[0][1]);
//console.log(cine[1][2]);

// añadir nuevos valores

peliculas.push("Volver al futuro");

// Elimina el ultimo elemento
peliculas.push("Texto para borrar");
peliculas.pop();

var indice = peliculas.indexOf("La vida es bella");
if (indice > -1){
    peliculas.splice(indice, 1);
}

console.log(peliculas);

// une los valores en un string separado por comas
var texto = peliculas.join();
console.log(texto);

// convertir una cadena en un array

var cadena = "texto3, texto1, texto2";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

// ordenar un array

cadena_array.sort();
console.log(cadena_array);

cadena_array.reverse();
console.log(cadena_array);