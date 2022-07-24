import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'trabajador',
    loadChildren: () =>
      import('./component/trabajador/trabajador.module').then((m) => m.TrabajadorModule),
  },
  {
    path: 'tarea',
    loadChildren: () =>
      import('./component/tarea/tarea.module').then((m) => m.TareaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }