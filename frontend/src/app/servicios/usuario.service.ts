import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:1,
        nombre: 'Johanna Arias',
        correoElectronico: 'johismn9-3@hotmail.com',
        imagen: 'https://scontent.fuio10-1.fna.fbcdn.net/v/t1.0-9/37140308_2710764418962336_5106342564458397696_n.jpg?_nc_cat=0&oh=f4a5fd01c2371e7b09ea25f335501d4e&oe=5BE76E4F',
        direccion: 'Amagasí de El Inca',
        telefono: '0991310296'
      },
      {
        id:2,
        nombre: 'Andrés Ruiz',
        correoElectronico: 'andydb@hotmail.com',
        imagen: 'https://i.pinimg.com/originals/f1/e9/84/f1e9845888e9801bf02a51a7ff3a8749.gif',
        direccion: 'La Loma',
        telefono: '0978616805'
      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
