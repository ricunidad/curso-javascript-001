"use strict"

/**
 * calculadora que pida dos numeros
 * si metemos uno mal que nos lo vuelva a pedir
 * que nos muestre en el cuerpo, en la consola y en una alerta, el resultado de las 4 operaciones fundamentales con dichos numeros
 */

var numero1 = parseInt(prompt("Introduce el primer numero",1));

while(numero1 < 0 || isNaN(numero1)){
    numero1 = parseInt(prompt("Introduce el primer numero nuevamente",1));
}

var numero2 = parseInt(prompt("Introduce el segundo numero",1));

while(numero2 < 0 || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el segundo numero nuevamente",1));
}

var resultadocmd = "La suma es : "+(numero1+numero2)+"\n"+
                "La resta es : "+(numero1-numero2)+"\n"+
                "La multiplicasión es : "+(numero1*numero2)+"\n"+
                "La división es : "+(numero1/numero2);

var resultado = "La suma es : "+(numero1+numero2)+"<br/>"+
                "La resta es : "+(numero1-numero2)+"<br/>"+
                "La multiplicasión es : "+(numero1*numero2)+"<br/>"+
                "La división es : "+(numero1/numero2);

document.write(resultado);



alert(resultadocmd);
console.log(resultadocmd);