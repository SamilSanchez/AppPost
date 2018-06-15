import { Component, OnInit } from '@angular/core';

// Importamos los servicios y modulos que necesitemos 
import { PostService } from '../../../app/services/post.services';
import { Post } from '../../../app/app.interfaces';


@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html'
})

export class ListaComponent implements OnInit {
    lista: Post[];

    constructor(
        private _post: PostService
    ) {
        // OBTIENE LA LISTA DE POST
        this._post.obtenerlista( (lista) => {

            this.lista = lista;
            console.log(lista);

        }, (err) => {});
        
     }

    ngOnInit() { }
}