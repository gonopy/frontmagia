import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { TareaModule } from './tarea/tarea.module';
import { TrabajadorModule } from './trabajador/trabajador.module';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';
import { TrabajadorRoutingModule } from './trabajador/trabajador-routing.module';

@NgModule({
  declarations: [HomeComponent, PaginanoencontradaComponent],
  imports: [
    CommonModule,
    TareaModule,
    TrabajadorModule,
    TrabajadorRoutingModule,
  ],
  exports: [HomeComponent],
})
export class ComponentModule {}
