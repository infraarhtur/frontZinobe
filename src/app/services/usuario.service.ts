import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import {UsuarioModel} from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public urlBase = '';
  constructor(private http: HttpClient) {

    this.urlBase = environment.urlBaseServicio;
  }



  obtenerUsuarios(){
    const url = `${this.urlBase}/usuarios`;
    return this.http.get(url);

  }
  obtenerUsuarioPorId(id:number){
    const url = `${this.urlBase}/usuarios/${id}`;
    return this.http.get(url);
  }

  crearUsuario(Usuarios:UsuarioModel){
    const url = `${this.urlBase}/usuarios`;
    return this.http.post(url, Usuarios);
  }



}
