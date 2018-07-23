import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEnBuscar: EventEmitter<object> = new EventEmitter();
  autores;
  libros;
  searchText:string;
  arrayAutores=[];
  arrayLibros=[];

  j:string;



  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

    const observableEquipo$ = this._httpClient
      .get('http://localhost:1337/autor');

    observableEquipo$
      .subscribe(
        results=>{
          console.log(results);

          this.autores=results;
          this.llenarEquipos();

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

    const observableJugador$ = this._httpClient
      .get('http://localhost:1337/libro');

    observableJugador$
      .subscribe(
        results=>{
          console.log(results);
          this.libros=results;
          this.llenarLibros()

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );
    //this.llenar()


  }

  llenarEquipos(){
    for (var i = 0; i < this.autores.length; i++) {
      this.arrayAutores.push(this.autores[i].nombre);
    }
  }

  llenarLibros(){
    for (var i = 0; i < this.libros.length; i++) {
      this.arrayLibros.push(this.libros[i].nombre);
    }
  }







}
