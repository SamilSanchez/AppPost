
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// IMPORTANDO INTERFACES Y LAS VARIABLES GLOBALES
import { Post } from '../app.interfaces';
import { Global } from '../../clases/global';

@Injectable()
export class PostService {

    lista: Post[];
    _global: Global;

    constructor(
        private _http: HttpClient
    ) { 
        console.log('Servicio Inicializado');
        this._global = new Global();        
    }

    obtenerlista (success, reject) {
        this._http.get(this._global.API_URL + '/posts')
        .subscribe( lista => {
            console.log('lista', lista);
            return success(lista)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });

    }
}
