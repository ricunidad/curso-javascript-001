import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'listado de los juegos mas populares'


        //console.log('Se ha cargado el componente: videojuegos.component.ts');
    }

    ngOnInit(){
        //console.log('On Init ejecutado');
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado")
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente"
    }

    ngOnDestroy(){
        console.log("onDestroy ejecutado");
    }
}