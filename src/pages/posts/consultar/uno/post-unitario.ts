import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

// Importamos los servicios y modulos que necesitemos 
import { PostService } from '../../../../app/services/post.services';


@Component({
  selector: 'page-post-unitario',
  templateUrl: 'post-unitario.html',
})
export class VerPostComponent {
  post: object = {};
  comentarios: any;

  constructor ( 
    public navParams: NavParams,
    private _post: PostService
  ) {
    const idPost = navParams.data['id'];
    // OBTENER UN POST
    this._post.obtenerPost( idPost, (post) => {
      this.post = post;
    }, (err) => {});

    // OBTENER LOS COMENTARIOS DE UN POST
    this._post.obtenerComentariosPost( idPost, (comentarios) => {
      this.comentarios = comentarios;
      console.log(comentarios);
    }, (err) => {});
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostUnitarioPage');
  }

}
