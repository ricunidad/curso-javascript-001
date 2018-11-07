// Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}


// Decorador
/*
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}
*/

// Clase (molde del objeto)

//@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Metodos (funciones o acciones del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}
var camiseta = new Camiseta('Amarillo', 'Manga Corta', 'Adidas', 'XL', 12);
camiseta.setColor('Rojo');


var playera = new Camiseta('Naranja', 'Manga Larga', 'Nike', 'L', 10);
playera.setColor('Azul');

console.log(camiseta.getColor(), playera);
//camiseta.estampacion();


// Clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera('Amarillo', 'Manga Corta', 'Adidas', 'XL', 12);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('Naranja');
console.log(sudadera_nike);