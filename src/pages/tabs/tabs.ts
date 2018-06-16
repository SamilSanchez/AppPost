import { Component } from '@angular/core';

import { NuevoPostComponent  } from '../posts/nuevo/nuevoPost.component';
import { ListaComponent } from '../posts/lista/lista.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListaComponent;
  tab2Root = NuevoPostComponent;
  constructor() {

  }
}
