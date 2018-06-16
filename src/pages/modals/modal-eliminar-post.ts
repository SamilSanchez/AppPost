import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';

// Importamos los servicios y modulos que necesitemos 
import { PostService } from '../../app/services/post.services';

// IMPORTANDO MODULO PARA LA GENERAR MENSAJE DE ALERTA
import { AlertController } from 'ionic-angular';

// OTRAS PAGINAS
import { ListaComponent } from '../posts/lista/lista.component';

@Component({
  selector: 'app-modal-eliminar-post',
  templateUrl: 'modal-eliminar-post.html',
})
export class ModalEliminarPostComponent {
  idPost: number;
  post: object = {};
  postGuadado: any;

  constructor ( 
    public navParams: NavParams,
    private _post: PostService,
    private alertCtrl: AlertController,
    private NavCtrl: NavController

  ) {
    this.idPost =  navParams.data['id'];
    
    // OBTENER UN POST
    this._post.obtenerPost( this.idPost , (post) => {
      this.post = {
        userId: post.userId,
        title: post.title,
        body: post.body
      }
      console.log( typeof this.post);
    }, (err) => {});
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostUnitarioPage');
  }

  eliminarPost () {
     // SOBRESCRIBIR LO DATOS DE UN POST
     this._post.eliminarPost(this.idPost, (post) => {
      console.log(post);
      this.mostrarAlertaExitosa();
    }, (err) => {
      console.log('Error :: ' , err);
      this.mostrarAlertaFallida();
    });

  }

  mostrarAlertaExitosa() {
    const alert = this.alertCtrl.create({
      title: 'Exito',
      subTitle: 'Se elimino el post de marena exitosa!',
      buttons: ['Aceptar']
    });
    alert.present();
     this.NavCtrl.push( ListaComponent);
  }

  mostrarAlertaFallida() {
    const alert = this.alertCtrl.create({
      title: 'Fallida !!!',
      subTitle: 'Nos pudo agregar el post intente nuevamente',
      buttons: ['Aceptar']
    });
    alert.present();
  }

}

