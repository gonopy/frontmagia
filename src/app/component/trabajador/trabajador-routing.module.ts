import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenedorComponent } from '../trabajador/mantenedor/mantenedor.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { PaginanoencontradaComponent } from '../paginanoencontrada/paginanoencontrada.component';

const routes: Routes = [
  {path: '', component:PaginanoencontradaComponent, 
    children: [
      { path: 'mantenedor', component: MantenedorComponent },
      { path: 'trabajador', component: TrabajadorComponent },
      { path: '**', component: PaginanoencontradaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajadorRoutingModule {}
