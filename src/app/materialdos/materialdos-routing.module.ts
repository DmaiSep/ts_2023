import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialdosComponent } from './materialdos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { AudiovisualesComponent } from './audiovisuales/audiovisuales.component';
import { InformaticosComponent } from './informaticos/informaticos.component';
import { ApuntesComponent } from './apuntes/apuntes.component';
import { DebilidadvComponent } from './debilidadv/debilidadv.component';
import { MatricesaComponent } from './matricesa/matricesa.component';
import { MatrizcComponent } from './matrizc/matrizc.component';
import { CirculolComponent } from './circulol/circulol.component';
import { InglestComponent } from './inglest/inglest.component';
import { ProgramacionrComponent } from './programacionr/programacionr.component';
import { MatricesComponent } from './matrices/matrices.component';

const routes: Routes = [
  {
    path:'Inicio', component: MaterialdosComponent,
    children:[
      { path:'Home', component: InicioComponent,outlet: "Secc"}, 
      { path:'Libros', component: LibrosComponent,outlet: "Secc", data: {state: 'libros'}}, 
      {path:'Audiovisuales', component: AudiovisualesComponent, outlet: "Secc"},
      {path:'Informaticos', component: InformaticosComponent, outlet: "Secc"},
      {path:'Apuntes', component: ApuntesComponent, outlet: "Secc"},
      {path:'DebilidadV', component: DebilidadvComponent, outlet: "Secc"},
      {path:'MatricezA', component: MatricesaComponent, outlet: "Secc"},
      {path:'MatrizC', component: MatrizcComponent, outlet: "Secc"},
      {path:'CirculoLectura', component: CirculolComponent, outlet: "Secc"},
      {path:'InglesTele', component: InglestComponent, outlet: "Secc"},
      {path:'Programareg', component: ProgramacionrComponent, outlet: "Secc"},
      {path:'Matrices', component: MatricesComponent, outlet: "Secc"},
    ]
  
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialdosRoutingModule { }
