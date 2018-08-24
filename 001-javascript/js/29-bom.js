'use strict'

// browser obgect model
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redireccionar(url){
    window.location.href = url;
}

function abrirventana(url){
    window.open(url);
}


getBom();