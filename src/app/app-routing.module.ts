import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'MaterialesE',
    loadChildren:()=> import('./materialedu/materialedu.module').then(m => m.MaterialeduModule)
  },
  {path: 'Materiales',
    loadChildren:()=> import('./materialdos/materialdos.module').then(m => m.MaterialdosModule)
  },
  { path: '**', redirectTo:'home' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
