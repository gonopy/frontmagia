import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  urlBase = `https://62dc8f984438813a26172af5.mockapi.io/gonopy/v1/`;

  constructor(private http: HttpClient) {}

  getList() {
    let url = `${this.urlBase}trabajador`;
    return this.http.get(url);
  }

  getPokeData(name: string) {
    return this.http.get(`${this.urlBase}/${name}`);
  }
}
