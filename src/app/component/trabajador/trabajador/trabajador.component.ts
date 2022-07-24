import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TareasService } from 'src/app/services/tareas/tareas.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss'],
})
export class TrabajadorComponent {
  todo: string[] = [];
  done: string[] = [];
  pagina: number = 0;

  constructor(private pokeService: TareasService) {
    this.setData();
  }

  setData() {
    this.pokeService.getList().subscribe((res: any) => {
      let aux = res;
      for (const key in aux) {
        if (Object.prototype.hasOwnProperty.call(aux, key)) {
          this.done.push(aux[key].name);
        }
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
