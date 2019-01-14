interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setVelocidad(velocidad: number){
        this.velocidad = velocidad;
    }

    constructor(modelo = null){
        this.velocidad = 0;
        this.color = "Blanco";

        if(modelo == null){
            this.modelo = "BMW Generico";
        }else{
            this.modelo = modelo;
        }
        
    }

    public acelerar() {
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

}

var coche_uno = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();

coche_uno.setColor("Rojo");
coche_uno.acelerar();
coche_uno.acelerar();
coche_uno.acelerar();




console.log("El color del coche 1 es: "+coche_uno.getColor());
console.log("La velocidad del coche 1 es: "+coche_uno.getVelocidad());

coche_uno.frenar();
console.log("La velocidad del coche 1 es: "+coche_uno.getVelocidad());

console.log("El modelo del coche 1 es: "+coche_uno.getModelo());



coche_dos.setColor("Azul");
coche_tres.setColor("Verde");

console.log("El color del coche 2 es: "+coche_dos.getColor());
console.log("El color del coche 3 es: "+coche_tres.getColor());