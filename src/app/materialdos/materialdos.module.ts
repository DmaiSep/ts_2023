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
import { MenuAsigPipe } from './pipes/menu-asig.pipe';
import { MenuGradoPipe } from './pipes/menu-grado.pipe';
import { ProgramacionrComponent } from './programacionr/programacionr.component';
import { ModalvComponent } from './modalv/modalv.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { FilterT2Pipe } from './pipes/filter-t2.pipe';
import { RutaPipe } from './pipes/ruta.pipe';
import { PefilContentPipe } from './pipes/pefil-content.pipe';
import { ModalbComponent } from './modalb/modalb.component';


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
    MenuAsigPipe,
    MenuGradoPipe,
    ProgramacionrComponent,
    ModalvComponent,
    DomseguroPipe,
    FilterT2Pipe,
    RutaPipe,
    PefilContentPipe,
    ModalbComponent,
  ],
  imports: [
    CommonModule,
    MaterialdosRoutingModule,
    SharedModule,
    MDBBootstrapModulesPro.forRoot(),
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ ModalvComponent ]
})
export class MaterialdosModule { }
