import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ComprasService} from "../servicios/compras.service";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libro=[];
  _parametros:any;

  nombre:string;
  estado: boolean;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute, private _compras: ComprasService) {

  }

  ngOnInit() {
    this.cargarLibro();

  }

  cargarLibro(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/libro?id='+this._parametros.idlibro)
        .subscribe(
          (res:any[])=>{
            this.libro=res;
            console.log(this.libro);
            console.log(this.libro[0].nombre);
            this.estado=this._compras.buscarLibro(this.libro[0].id,this.libro[0].autorIdFk.id);
            console.log(this.estado);
            console.log(this._compras.getLibro());
          },
          (err)=>{
            console.log(err);
          }
        )


    });
  }

  comprarLibro(){
    this._compras.ingresarLibro(this.libro);
    this._compras.actualizarTamanio();
    console.log(this._compras)
  }



}
