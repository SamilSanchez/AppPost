import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

// Importamos los servicios y modulos que necesitemos 
import { PostService } from '../../../app/services/post.services';
import { Post } from '../../../app/app.interfaces';

// Otras Paginas 
import { VerPostComponent } from '../consultar/uno/post-unitario';


@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html'
})

export class ListaComponent implements OnInit {
    lista: Post[];

    constructor(
        private _post: PostService,
        private NavCtrl: NavController
    ) {
        // OBTIENE LA LISTA DE POST
        this._post.obtenerPosts( (posts) => {
            this.lista = posts;
            console.log(posts);
        }, (err) => {});
        
     }

    ngOnInit() { }

    verPost (id) {
        console.log('id', id);
        // Cambio a la viata para ver el post
        this.NavCtrl.push( VerPostComponent,{ id: id } )
    }
    editarPost (id) {
        console.log('id', id);
        
    }

}