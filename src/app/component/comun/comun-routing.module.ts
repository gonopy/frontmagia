import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '**', component: PaginanoencontradaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunRoutingModule {}
