import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialdosComponent } from './materialdos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { AudiovisualesComponent } from './audiovisuales/audiovisuales.component';
import { InformaticosComponent } from './informaticos/informaticos.component';

const routes: Routes = [
  {
    path:'inicio', component: MaterialdosComponent,
    children:[
      { path:'Suger', component: InicioComponent,outlet: "Dinamyk2"}, 
      { path:'Libros', component: LibrosComponent,outlet: "Dinamyk2"}, 
      {path:'Audiovisual', component: AudiovisualesComponent, outlet: "Dinamyk2"},
      {path:'Informatico', component: InformaticosComponent, outlet: "Dinamyk2"},
    ]
  
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialdosRoutingModule { }
