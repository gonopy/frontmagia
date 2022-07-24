import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { MantenedorComponent } from './mantenedor/mantenedor.component';


@NgModule({
  declarations: [
    MantenedorComponent
  ],
  imports: [
    CommonModule,
    TareaRoutingModule
  ]
})
export class TareaModule { }
