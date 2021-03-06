
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

    obtenerPosts (success, reject) {
        this._http.get(this._global.API_URL + '/posts')
        .subscribe( lista => {
            return success(lista)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }

    obtenerPost (id, success, reject) {
        this._http.get(this._global.API_URL + '/posts/' + id )
        .subscribe( post => {
            return success(post)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }
    obtenerComentariosPost (id, success, reject) {
        this._http.get(this._global.API_URL + '/posts/' + id + '/comments')
        .subscribe( comentarios => {
            return success(comentarios)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }
    obtenerPostsPorUsuario (idUser, success, reject) {
        this._http.get(this._global.API_URL + '/posts/?userId=' + idUser )
        .subscribe( comentarios => {
            return success(comentarios)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }

    agregarPost (datos, success, reject) {
        this._http.post(this._global.API_URL + '/posts', datos)
        .subscribe( nuevoPost => {
            return success(nuevoPost)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }

    guardarPost (datos, idPost, success, reject) {
        this._http.put(this._global.API_URL + '/posts/' + idPost, datos)
        .subscribe( postEditado => {
            return success(postEditado)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }

    eliminarPost (idPost, success, reject) {
        this._http.delete(this._global.API_URL + '/posts/' + idPost)
        .subscribe( postEditado => {
            return success(postEditado)
        }, err => {
            console.log('Error', err);
            return reject(err);              
        });
    }
}
