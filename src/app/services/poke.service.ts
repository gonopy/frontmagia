import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  urlBase = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private http: HttpClient) { }

  getList(page: number) {
    return this.http.get(`${this.urlBase}`, {
      params: { offset: page, limit: 8 },
    });
  }

  getPokeData(name: string) {
    return this.http.get(`${this.urlBase}/${name}`);
  }
}
