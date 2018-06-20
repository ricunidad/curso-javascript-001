'use strict'

// funciones anonimas
// es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var suma = numero1+numero2;
    
    sumaYmuestra(suma);
    sumaPorDos(suma);
}

sumame(5,7,function(dato){
    console.log("La suma es: "+dato);
},
function(dato){
    console.log("La suma por dos es: "+ (dato*2));
});


sumame(8,7,dato => {
    console.log("La suma es: "+dato);
},
dato =>{
    console.log("La suma por dos es: "+ (dato*2));
});
