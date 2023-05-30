import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialeduComponent } from './materialedu.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { InformaticoComponent } from './informatico/informatico.component';
import { CortometrajeComponent } from './cortometraje/cortometraje.component';
const routes: Routes = [
  {
    path:'Inicio', component: MaterialeduComponent,
    children:[
      { path:'Home', component: InicioComponent,outlet: "Secc"}, 
      { path:'Libros', component: LibrosComponent,outlet: "Secc"}, 
      {path:'Audiovisual', component: AudiovisualComponent, outlet: "Secc"},
      {path:'Informatico', component: InformaticoComponent, outlet: "Secc"},
      {path:'Cortometraje', component: CortometrajeComponent, outlet: "Secc"},
    ]
  
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialeduRoutingModule { }
