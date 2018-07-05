'use strict'

// formulario que nos permite añadir peliculas

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector("#addpelicula").value;
    localStorage.setItem(titulo, titulo);
});

var listado = document.querySelector("#listapeliculas");

for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        var li = document.createElement("li");
        li.append(localStorage[key]);
        listado.append(li);
    }
}

var formularioborrar = document.querySelector("#formBorrarPeliculas");
formularioborrar.addEventListener('submit', function(){
    console.log("borrando");
    var titulo = document.querySelector("#borrarpelicula").value;

    localStorage.removeItem(titulo);
});