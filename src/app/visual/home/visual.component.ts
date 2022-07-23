import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.scss'],
})
export class VisualComponent {
  todo = ['Pick up groceries'];
  done: string[] = [];

  pagina: number = 0;

  constructor(private pokeService: PokeService) {
    this.setData();
  }

  setData() {
    this.pokeService.getList(this.pagina).subscribe((res: any) => {
      let aux = res.results;
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
