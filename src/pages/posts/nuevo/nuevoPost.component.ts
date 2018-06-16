import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../app/services/post.services';

import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-nuevo-post',
    templateUrl: 'nuevoPost.component.html'
})

export class NuevoPostComponent implements OnInit {
    datos: Object = {}
    nuevoPost: any;
    constructor(
        private _post: PostService,
        private alertCtrl: AlertController
    ) { }

    ngOnInit() { }

    agregarPost (datos) {
         // AGREGAR UN NUEVO POST A LA LISTA
         this._post.agregarPost(datos, (nuevoPost) => {
            this.nuevoPost= nuevoPost;
            this.datos = {};
            console.log(nuevoPost);
            this.mostrarAlertaExitosa();
            }, (err) => {
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
          subTitle: 'Nos pudo agrgar el post intente nuevamente',
          buttons: ['Aceptar']
        });
        alert.present();
      }
}