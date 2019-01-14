module Tienda{
    export class Ropa{
        constructor(public titulo: string){
            alert(titulo);
        }
    }

    export class Informatica{
        constructor(public titulo: string){
            alert('Tienda de tecnologia: '+titulo);
        }
    }
}


import Informatica= Tienda.Informatica;
let cargar_informatica = new Informatica('Super Tienda'); 

function arranque(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = function():void{
            alert(lanzar);
        }
    }
}

@arranque('Lanzamiento del curso de NodeJS y Angular 2')
class Programa{
    protected nombre: string;
    protected version: number;

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setVersion(version:number){
        this.version = version;
    }

    getVersion(){
        return this.version;
    }
}

var programa = new Programa();
programa.lanzamiento();

class EditorVideo extends Programa{
    protected timeline: number;

    setTimeline(timeline: number){
        this.timeline = timeline;
    }

    getTimeline(){
        return this.timeline;
    }

    getAllData():string{
        return this.getNombre()+" - "+this.getVersion()+' - '+this.getTimeline();
    }
}


var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());


// Logica del formulario

var programas = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    var version = 1;

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);

    programas.push(programa);

    var list = "";
    for(var i=0; i < programas.length; i++ ){
        list = list+"<li>"+programas[i].getNombre()+"</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
    listado.innerHTML = list;

}