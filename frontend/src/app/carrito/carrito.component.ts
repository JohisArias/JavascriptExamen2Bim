import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../servicios/compras.service";
import {UsuarioService} from "../servicios/usuario.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  compras;
  usuario;
  total=0;

  nombrefac:string;
  correofac: string;
  direccionfac:string
  telefonofac:string;

  constructor(private _compras: ComprasService, private _usuario: UsuarioService) { }


  ngOnInit() {
    this.cargarCompras();
    this.cargarUsuario();
    this.calcularTotal();

    this.nombrefac=this.usuario[0].nombre;
    this.correofac=this.usuario[0].correoElectronico;
    this.direccionfac=this.usuario[0].direccion;
    this.telefonofac=this.usuario[0].telefono;
  }

  cargarCompras(){
    this.compras=this._compras.getLibro();
  }

  borrarCompras(indice: number){
    this._compras.borrarLibro(indice);
    this._compras.actualizarTamanio();
    this.total=0;
    this.calcularTotal()
  }

  calcularTotal(){
    for(let i=0; i<this.compras.length;i++){
      this.total=this.total+this.compras[i].valor;
    }
  }

  finCompra(){
    alert('Compra con exito')
  }

  cargarUsuario(){
    this.usuario=this._usuario.getUsuario();
  }

  esNulos(){
    if(
      this.nombrefac==null||
      this.direccionfac==null||
      this.correofac==null){
      return true;
    }else{
      return false;
    }
  }

  guardarInformacion(event, formData){
    // console.log(event);
    console.log(formData);
    this.nombrefac=formData.value.nombre;
    this.correofac=formData.value.correo;
    this.direccionfac=formData.value.direccion;
  }

}
