// MODULOS NECESARIOS
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// Modulo para hacer peticiones Http
import { HttpClientModule } from '@angular/common/http';

// COMPONENTE PRINCIPAL
import { MyApp } from './app.component';

// PAGINAS DE LA APLICACION 
import { TabsPage } from '../pages/tabs/tabs';
import { ListaComponent } from '../pages/posts/lista/lista.component';
import { NuevoPostComponent } from '../pages/posts/nuevo/nuevoPost.component';
import { EliminarPostComponent } from '../pages/posts/eliminar/eliminarpost';
import { VerPostComponent } from '../pages/posts/consultar/uno/post-unitario';


// PIPES
import { TruncatePipe } from '../app/pipes/util.pipes';

// SEVICIOS DE LA APLICACION
import { PostService } from '../app/services/post.services';


// MODULOS NATIVO DE IONIC 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ListaComponent,
    NuevoPostComponent,
    EliminarPostComponent,
    VerPostComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ListaComponent,
    NuevoPostComponent,
    EliminarPostComponent,
    VerPostComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
