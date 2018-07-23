import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { routing} from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutorComponent } from './autor/autor.component';
import { LibroComponent } from './libro/libro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { SearchPipe } from './pipes/search.pipe'; //para realizar búsqueda
import { NavBarComponent } from './nav-bar/nav-bar.component';//barra de navegación



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutorComponent,
    LibroComponent,
    CarritoComponent,
    SearchPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
