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
import { ReactiveFormsModule } from '@angular/forms';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { BuscarComponent } from './buscar/buscar.component';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { CortometrajeComponent } from './cortometraje/cortometraje.component';
import { RutaPipe } from './pipes/ruta.pipe';
import { Informatico2Component } from './informatico2/informatico2.component';
import { Audiovisual2Component } from './audiovisual2/audiovisual2.component';
import { XimhaiComponent } from './ximhai/ximhai.component';
import { ModalbComponent } from './modalb/modalb.component';




@NgModule({
  declarations: [
    MaterialeduComponent,
    LibrosComponent,
    InicioComponent,
    AudiovisualComponent,
    InformaticoComponent,
    BusquedaPipe,
    BuscarComponent,
    CategoriaPipe,
    CortometrajeComponent,
    RutaPipe,
    Informatico2Component,
    Audiovisual2Component,
    XimhaiComponent,
    ModalbComponent,
  ],
  imports: [
    CommonModule,
    MaterialeduRoutingModule,
    SharedModule,
    MDBBootstrapModulesPro.forRoot(),
    NgxUsefulSwiperModule,
    ReactiveFormsModule
  ]
})
export class MaterialeduModule { }
