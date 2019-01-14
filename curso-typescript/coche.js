var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche_uno = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();
coche_uno.setColor("Rojo");
coche_uno.acelerar();
coche_uno.acelerar();
coche_uno.acelerar();
console.log("El color del coche 1 es: " + coche_uno.getColor());
console.log("La velocidad del coche 1 es: " + coche_uno.getVelocidad());
coche_uno.frenar();
console.log("La velocidad del coche 1 es: " + coche_uno.getVelocidad());
console.log("El modelo del coche 1 es: " + coche_uno.getModelo());
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
