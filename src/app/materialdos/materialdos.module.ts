import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialdosRoutingModule } from './materialdos-routing.module';
import { MaterialdosComponent } from './materialdos.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { AudiovisualesComponent } from './audiovisuales/audiovisuales.component';
import { InformaticosComponent } from './informaticos/informaticos.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { SharedModule } from '../shared/shared.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    MaterialdosComponent,
    LibrosComponent,
    InicioComponent,
    AudiovisualesComponent,
    InformaticosComponent
  ],
  imports: [
    CommonModule,
    MaterialdosRoutingModule,
    SharedModule,
    MDBBootstrapModulesPro.forRoot(),
    NgxUsefulSwiperModule
  ]
})
export class MaterialdosModule { }
