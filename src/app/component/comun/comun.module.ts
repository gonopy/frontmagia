import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunRoutingModule } from './comun-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';

@NgModule({
  declarations: [HomeComponent, PaginanoencontradaComponent],
  imports: [CommonModule, ComunRoutingModule, RouterModule],
})
export class ComunModule {}
