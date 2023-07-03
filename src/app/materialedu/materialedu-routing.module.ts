import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialeduComponent } from './materialedu.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { InformaticoComponent } from './informatico/informatico.component';
import { CortometrajeComponent } from './cortometraje/cortometraje.component';
import { XimhaiComponent } from './ximhai/ximhai.component';
import { Audiovisual2Component } from './audiovisual2/audiovisual2.component';
import { Informatico2Component } from './informatico2/informatico2.component';
const routes: Routes = [
  {
    path:'Inicio', component: MaterialeduComponent,
    children:[
      { path:'Home', component: InicioComponent,outlet: "Secc"}, 
      { path:'Libros', component: LibrosComponent,outlet: "Secc"}, 
      { path:'Ximhai', component: XimhaiComponent,outlet: "Secc"}, 
      {path:'VideoPA', component: AudiovisualComponent, outlet: "Secc"},
      {path:'VideoPI', component: Audiovisual2Component, outlet: "Secc"},
      {path:'InformaticoPA', component: InformaticoComponent, outlet: "Secc"},
      {path:'InformaticoPI', component: Informatico2Component, outlet: "Secc"},
      {path:'Cortometraje', component: CortometrajeComponent, outlet: "Secc"},
    ]
  
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialeduRoutingModule { }
