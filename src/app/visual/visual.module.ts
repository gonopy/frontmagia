import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './home/visual.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [VisualComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [VisualComponent] 
})
export class VisualModule { }
