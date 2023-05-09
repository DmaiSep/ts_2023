import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialeduComponent } from './materialedu.component';
import { LibrosComponent } from './libros/libros.component';
import { InicioComponent } from './inicio/inicio.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { InformaticoComponent } from './informatico/informatico.component';
const routes: Routes = [
  {
    path:'inicio', component: MaterialeduComponent,
    children:[
      { path:'Suger', component: InicioComponent,outlet: "Dinamyk"}, 
      { path:'Libros', component: LibrosComponent,outlet: "Dinamyk"}, 
      {path:'Audiovisual', component: AudiovisualComponent, outlet: "Dinamyk"},
      {path:'Informatico', component: InformaticoComponent, outlet: "Dinamyk"},
    ]
  
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialeduRoutingModule { }
