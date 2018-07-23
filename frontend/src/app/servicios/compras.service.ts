import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _carrito=[];
  private _indice=0;
  private _estado:boolean;

  tamanio$ = new BehaviorSubject(this._carrito.length);

  constructor() {}

  public getLibro(){
    return this._carrito;
  }

  public ingresarLibro(libro){
    this._carrito.push(
      {
        'id': libro[0].id,
        'autorIdFk': libro[0].autorIdFk,
        'nombre': libro[0].nombre,
        'isbn': libro[0].isbn,
        'numeroPaginas': libro[0].numeroPaginas,
        'fechaPublicacion': libro[0].fechaPublicacion,
        'valor': libro[0].valor,
        'urlImagen' : libro[0].urlImagen
      }
    );
  }

  public borrarLibro(indice){
    this._carrito.splice(indice,1);
  }

  public buscarLibro(id:number, autorIdFk:number){

    if(this._carrito.length==0){
      this._estado=false;
    }else{
    console.log('tam',this._carrito.length)

    for (var i = 0; i < this._carrito.length; i++) {
      console.log('carrito',this._carrito[i])
      if(this._carrito[i].id==id && this._carrito[i].autorIdFk==autorIdFk){
        this._estado=true;
        break;
      }else{
        this._estado=false;
      }
    }

    }
    return this._estado;
  }

  public getLength() {
    return this.tamanio$;
  }

  public actualizarTamanio(){
    this.tamanio$.next(this._carrito.length);
  }

}
