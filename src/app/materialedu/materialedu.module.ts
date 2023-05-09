import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialeduRoutingModule } from './materialedu-routing.module';
import { MaterialeduComponent } from './materialedu.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { InformaticoComponent } from './informatico/informatico.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    MaterialeduComponent,
    LibrosComponent,
    InicioComponent,
    AudiovisualComponent,
    InformaticoComponent
  ],
  imports: [
    CommonModule,
    MaterialeduRoutingModule,
    SharedModule,
    MDBBootstrapModulesPro.forRoot(),
    NgxUsefulSwiperModule
  ]
})
export class MaterialeduModule { }
