import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-equipo',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autor;
  libro;

  _parametros:any;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarAutor();
    this.cargarLibro();
  }

  cargarLibro(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/libro?autorIdFk='+this._parametros.idautor)
        .subscribe(
          (res)=>{
            this.libro=res;
            console.log(this.libro);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  cargarAutor(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/autor?id='+this._parametros.idautor)
        .subscribe(
          (res)=>{
            this.autor=res;
            console.log(this.libro);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

}
