import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualModule } from './visual/visual.module';
import { PokeModule } from './poke/poke.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    VisualModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PokeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
