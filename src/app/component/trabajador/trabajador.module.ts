import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajadorRoutingModule } from './trabajador-routing.module';
import { MantenedorComponent } from './mantenedor/mantenedor.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { TareasService } from '../../services/tareas/tareas.service';

@NgModule({
  imports: [CommonModule, TrabajadorRoutingModule, DragDropModule, HttpClientModule],
  declarations: [MantenedorComponent, TrabajadorComponent],
  providers: [TareasService],
})
export class TrabajadorModule {}
