import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

// Importamos los servicios y modulos que necesitemos 
import { PostService } from '../../../app/services/post.services';
import { Post } from '../../../app/app.interfaces';

// Otras Paginas 
import { VerPostComponent } from '../consultar/uno/post-unitario';
import { EditarPostComponent } from '../editar/editar-post';

// MODALES
import { ModalEliminarPostComponent } from '../../modals/modal-eliminar-post';



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
        private NavCtrl: NavController,
        public modalCtrl: ModalController
    ) {
        // LIMITE DE POST A MOSTRAR POR SCROLL
        this.limitePost = 10;
        // OBTIENE LA LISTA DE POST
        this._post.obtenerPosts( (posts) => {
            this.lista = posts;
        }, (err) => {});
        
     }

     // FUNCION QUE DE ENCARGA DEL SCROLL AUTOMTICO
     doInfinite(infiniteScroll) {
        setTimeout(() => {
          this.limitePost = this.limitePost + 10      
          infiniteScroll.complete();
        }, 800);
      }

    ngOnInit() { }

    // PERMITE VER UN POST DETERMINADO
    verPost (id) {
        // Cambio a la vista para ver el post
        this.NavCtrl.push( VerPostComponent, { id: id  } )
    }
    // PERMITE EDITAR UN POST ESPECIFICO
    editarPost (id) {
         // Cambio a la vista para editar el post
         this.NavCtrl.push( EditarPostComponent,{ id: id } )
    }
    // PERMITE ELIMINAT UN POST ESPECIFICO 
    eliminarPost (id) {
        const modal = this.modalCtrl.create(ModalEliminarPostComponent, { id: id });
        modal.present();
    }
    // PERMITE FILTRAR POST POR ID DE USUARIO
    onInput (event){
        if (this.busqueda) {
            this._post.obtenerPostsPorUsuario( this.busqueda, (postsUsuario) => {
                this.lista = postsUsuario;
            }, (err) => {});
        }       
    }
}