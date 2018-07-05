'use strict'

// DOM
//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

console.log(caja);

console.log(caja.innerHTML);

caja.innerHTML = "Texto cambiado";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

console.log(caja);

// Conseguir elementos por su etiqueta

var todoslosDivs = document.getElementsByTagName("div");

var contenidoTexto = todoslosDivs[2].textContent;

console.log(todoslosDivs);
console.log(contenidoTexto);

//todoslosDivs.forEach((valor, indice){
var valor;
for(valor in todoslosDivs){
    if(typeof todoslosDivs[valor].textContent == "string"){
        var parrafo =  document.createElement("p");
        var texto = document.createTextNode(todoslosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
    
}

// Conseguir elementos de una clase
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo")


console.log(divsRojos);

for (const key in divsRojos) {
    if (divsRojos.hasOwnProperty(key)) {
        divsRojos[key].style.background = "red";
    }
}

for (const key in divsAmarillos) {
    if (divsAmarillos.hasOwnProperty(key)) {
        divsAmarillos[key].style.background = "yellow";
    }
}

/**
 * solo selecciona un elemeto
 * var divsRojos = document.querySelector(".rojo");
 * var divsAmarillos = document.querySelector(".amarillo");
 */