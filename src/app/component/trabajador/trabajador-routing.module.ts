import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenedorComponent } from '../trabajador/mantenedor/mantenedor.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';

const routes: Routes = [
  {
    path: '',
    component: MantenedorComponent,
    children: [
      { path: 'trabajador', component: TrabajadorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajadorRoutingModule {}
