'use strict'

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
}

console.log(pelicula);

var peliculas = [
    {titulo: 'La vida es Vella', year: 1998, pais: 'Estados Unidos'},
    pelicula
];

var caja_peliculas = document.querySelector("#peliculas");

peliculas.forEach((elemento, indice) => {
    var p = document.createElement("p");
    p.append(elemento.titulo+' - '+elemento.year);
    caja_peliculas.append(p);
});


console.log(caja_peliculas);

/*
for (const key in peliculas) {
    if (peliculas.hasOwnProperty(key)) {
        var p = document.createElement("p");
        p.append(peliculas[key].titulo+' - '+peliculas[key].year);
        caja_peliculas.append(p);
        
    }
}
*/