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

  constructor(
    public navParams: NavParams,
    private _post: PostService) {
    console.log(navParams);
    const idPost = navParams.data['id'];
    // OBTIENE LA LISTA DE POST
    this._post.obtenerPost( idPost, (post) => {
      this.post = post;
      console.log(post);
  }, (err) => {});
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostUnitarioPage');
  }

}
