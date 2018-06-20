"use strict"

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor, el menor o si son iguales
 * 
 * Plus: si los datos no son un numero o son menores o iguales a cero, nos los vuelva apedir
 */


var numero1 = parseInt(prompt("Introduce el primer numero", 0));
while(numero1 <= 0 || isNaN(numero1)){
    numero1 = parseInt(prompt("El primer numero no es valido, ingrese otro", 0));
}

var numero2 = parseInt(prompt("Introduce el segundo numero", 0));
while(numero2 <= 0 || isNaN(numero2)){
    numero2 = parseInt(prompt("El segundo numero no es valido, ingrese otro", 0));
}


console.log("numero 1: "+numero1+", numero 2: "+numero2);

if(numero1 == numero2){
    alert("Los numero son iguales")
}else if(numero1 > numero2){
    alert("El numero mayor es "+numero1);
    alert("El numero mayor es "+numero2);
}else if(numero1 < numero2){
    alert("El numero mayor es "+numero2);
    alert("El numero mayor es "+numero1);
}else{
    alert("Introduce un numero correcto");
}