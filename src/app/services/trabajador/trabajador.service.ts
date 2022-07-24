import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  urlBase = `https://62dc8f984438813a26172af5.mockapi.io/gonopy/v1/`;

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(`${this.urlBase}trabajador`);
  }

  getPokeData(name: string) {
    return this.http.get(`${this.urlBase}/${name}`);
  }

  postTareaTrabajador(request: any) {
    return this.http.post(`${this.urlBase}trabajador`, request);
  }
}
