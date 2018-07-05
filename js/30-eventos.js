'use strict'

// eventos de raton

window.addEventListener('load',function(){
    var boton = document.querySelector("#boton");

    function cambiarColor(){
        if(boton.style.background == "green"){
            var bg = boton.style.background= "red";
        }else{
            var bg = boton.style.background= "green";
        }
    }
    
    
    // captura el clic
    boton.addEventListener("click", function(){
        cambiarColor();
    });
    
    // mouse over  (mouse ensima)
    
    boton.addEventListener('mouseover', function(){
        boton.style.background = '#ccc';
    });
    
    
    // mouse out (mouse saliendo)
    
    boton.addEventListener('mouseout', function(){
        boton.style.background = 'black';
    });
    
    
    var input = document.querySelector("#camponombre");
    // focus
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input")
    });
    
    // blur
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input")
    });
    
    // keydown (cuando pulsas una tecla)
    input.addEventListener('keydown', function(){
        console.log("pulsaste una tecla:", String.fromCharCode(event.keyCode))
    });
    
    // keypress (la tecla esta presionada)
    input.addEventListener('keypress', function(){
        console.log("tecla presionada", String.fromCharCode(event.keyCode))
    });
    
    // keyup (tecla soltada)
    input.addEventListener('keyup', function(){
        console.log("tecla presionada", String.fromCharCode(event.keyCode))
    });
});

