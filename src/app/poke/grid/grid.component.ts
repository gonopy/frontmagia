import { Component } from '@angular/core';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  pokeList: Array<any> = [];
  pagina: number = 0;
  avancePaginador: number = 8;

  constructor(private pokeService: PokeService) {
    this.setData()
  }

  setData() {
    this.pokeService.getList(this.pagina).subscribe((res: any) => {
      this.pokeList = res.results;
    });
  }

  nextPage() {
    this.pagina += this.avancePaginador;
    this.setData()
  }

  previusPage() {
    this.pagina -= this.avancePaginador;
    this.setData()
  }
}
