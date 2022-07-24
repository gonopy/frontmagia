import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gonopy';

  constructor(private readonly router: Router) {}

  redirigirConGradilla($event: string) {
    console.log('Entró a redirigir', $event);
    let mensaje = 'Hola';

    this.router.navigate([$event], {
      queryParams: {
        cabecera: mensaje,
      },
    });
  }
}
