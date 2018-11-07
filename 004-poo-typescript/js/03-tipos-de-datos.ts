// String
let cadena: string = "Reynaldo Choque";

// Number
let numero: number = 12;

// Booleano
let verdadero_falso: boolean = true;

// Any (cualquier tipo)
let cualquiera: any = 'Hola';

cualquiera = 12;

// Arrays
var lenguajes: Array<string> = ['PHP', 'JS', 'HTML', 'CSS'];

let years: number[] = [1,2,3,4,5];


// Alfanumerico

type alfanumerico = string|number;
let alfa_numerico: alfanumerico = "Reynaldo Choque";
alfa_numerico = 23;


// Let y Var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2);