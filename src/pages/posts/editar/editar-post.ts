import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

// Importamos los servicios y modulos que necesitemos 
import { PostService } from '../../../app/services/post.services';

// IMPORTANDO MODULO PARA LA GENERAR MENSAJE DE ALERTA
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-editar-post',
  templateUrl: 'editar-post.html',
})
export class EditarPostComponent {
  idPost: number;
  post: object = {};
  postGuadado: any;

  constructor ( 
    public navParams: NavParams,
    private _post: PostService,
    private alertCtrl: AlertController

  ) {
    this.idPost =  navParams.data['id'];
    
    // OBTENER UN POST
    this._post.obtenerPost( this.idPost , (post) => {
      this.post = {
        userId: post.userId,
        title: post.title,
        body: post.body
      }
    }, (err) => {});
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostUnitarioPage');
  }

  guardarPost () {
     // SOBRESCRIBIR LO DATOS DE UN POST
     this._post.guardarPost( this.post, this.idPost, (post) => {
      this.postGuadado = post;
      this.mostrarAlertaExitosa();
    }, (err) => {
      console.log('Errror :: ' , err);
      this.mostrarAlertaFallida();
    });

  }

  mostrarAlertaExitosa() {
    const alert = this.alertCtrl.create({
      title: 'Exito',
      subTitle: 'Se agrego el post de marena exitosa!',
      buttons: ['Aceptar']
    });
    alert.present();
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

