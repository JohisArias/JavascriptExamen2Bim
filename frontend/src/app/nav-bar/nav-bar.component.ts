import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../servicios/compras.service";
import {UsuarioService} from "../servicios/usuario.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  indice:number;
  nombre:string;

  constructor(private _compras: ComprasService, private _usuario: UsuarioService) {


  }

  ngOnInit() {
    // this.indice=this._compras.getLength().sub;
    this._compras.getLength().subscribe(size=>this.indice=size);
    this.nombre=this._usuario.getUsuario()[0].nombre;
    console.log(this.indice)  }


}
