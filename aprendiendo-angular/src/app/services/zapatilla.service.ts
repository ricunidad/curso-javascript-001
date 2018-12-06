import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
public zapatillas;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true ),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true ),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true ),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false ),
            new Zapatilla('Adidas Sparta', 'Adidas', 'Azul', 180, false ),
        ];
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }
}