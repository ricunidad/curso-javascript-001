'use strict'

// Local Storage


// Comprovar si está disponible
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("El Localstorage no esta disponible");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

// Recuperar elemento

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


// guarda objeto
var usuario = {
    nombre: "Reynaldo Rodrigo Choque Vicente",
    email: "ricunidad@hotmail.com",
    web: "ricunidad.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto
var usuario_recuperado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario_recuperado);


// borrar

localStorage.removeItem("usuario");

// borrar todos

localStorage.clear();