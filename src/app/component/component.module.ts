import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HomeComponent } from './home/home.component';
import { TareaModule } from './tarea/tarea.module';
import { TrabajadorModule } from './trabajador/trabajador.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    TareaModule,
    TrabajadorModule,
  ],
  exports: [HomeComponent],
})
export class ComponentModule {}
