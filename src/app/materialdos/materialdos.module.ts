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
import { ApuntesComponent } from './apuntes/apuntes.component';
import { DebilidadvComponent } from './debilidadv/debilidadv.component';
import { MatricesaComponent } from './matricesa/matricesa.component';
import { MatrizcComponent } from './matrizc/matrizc.component';
import { CirculolComponent } from './circulol/circulol.component';
import { InglestComponent } from './inglest/inglest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterTPipe } from './pipes/filter-t.pipe';
import { MenuAsigPipe } from './pipes/menu-asig.pipe';
import { MenuGradoPipe } from './pipes/menu-grado.pipe';


@NgModule({
  declarations: [
    MaterialdosComponent,
    LibrosComponent,
    InicioComponent,
    AudiovisualesComponent,
    InformaticosComponent,
    ApuntesComponent,
    DebilidadvComponent,
    MatricesaComponent,
    MatrizcComponent,
    CirculolComponent,
    InglestComponent,
    FilterTPipe,
    MenuAsigPipe,
    MenuGradoPipe,
  ],
  imports: [
    CommonModule,
    MaterialdosRoutingModule,
    SharedModule,
    MDBBootstrapModulesPro.forRoot(),
    NgxUsefulSwiperModule,
    ReactiveFormsModule
  ]
})
export class MaterialdosModule { }
