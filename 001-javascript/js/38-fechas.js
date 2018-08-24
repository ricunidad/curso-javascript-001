'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes  = fecha.getMonth();
var dia = fecha.getDay();

var texto_hora = `
    El año es el: ${year}
    El mes es el: ${mes}
    El dia es el: ${dia}
`;

console.log(texto_hora);

