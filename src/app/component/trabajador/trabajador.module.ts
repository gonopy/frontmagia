import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { MantenedorComponent } from './mantenedor/mantenedor.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    MantenedorComponent,
    TrabajadorComponent
  ],
  imports: [
    CommonModule,
    TrabajadorRoutingModule,
    DragDropModule
  ]
})
export class TrabajadorModule { }
