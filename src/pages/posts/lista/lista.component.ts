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
    lista: Post[] = [];
    limitePost: number;
    busqueda;

    constructor(
        private _post: PostService,
        private NavCtrl: NavController
    ) {
        // LIMITE DE POST A MOSTRAR POR SCROLL
        this.limitePost = 10;
        // OBTIENE LA LISTA DE POST
        this._post.obtenerPosts( (posts) => {
            this.lista = posts;
            console.log(posts);
        }, (err) => {});
        
     }

     // FUNCION QUE DE ENCARGA DEL SCROLL AUTOMTICO
     doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(() => {
          this.limitePost = this.limitePost + 10      
          console.log('Async operation has ended');
          infiniteScroll.complete();
        }, 800);
      }

    ngOnInit() { }

    // PERMITE VER UN POST DETERMINADO
    verPost (id) {
        console.log('id', id);
        // Cambio a la viata para ver el post
        this.NavCtrl.push( VerPostComponent,{ id: id } )
    }
    // PERMITE EDITAR UN POST ESPECIFICO
    editarPost (id) {
        console.log('id', id);
        
    }
    // PERMITE FILTRAR POST POR ID DE USUARIO
    onInput (event){
        console.log(this.busqueda);
        if (this.busqueda) {
            this._post.obtenerPostsPorUsuario( this.busqueda, (postsUsuario) => {
                this.lista = postsUsuario;
                console.log(postsUsuario);
            }, (err) => {});
        }       
    }
}