import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tarea-routing.module';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  declarations: [TareaComponent],
  imports: [CommonModule, TareaRoutingModule],
})
export class TareaModule {}
