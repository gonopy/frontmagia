import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./component/comun/comun.module').then((m) => m.ComunModule),
  },
  {
    path: 'trabajador',
    loadChildren: () =>
      import('./component/trabajador/trabajador.module').then(
        (m) => m.TrabajadorModule
      ),
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
export class AppRoutingModule {}
