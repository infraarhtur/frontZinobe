import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import {CreditoModel} from 'src/app/models/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditosService {
  public urlBase = '';
  constructor(private http: HttpClient) {

    this.urlBase = environment.urlBaseServicio;
  }



  obtenerCreditos(){
    const url = `${this.urlBase}/creditos`;
    return this.http.get(url);

  }
  obtenerCreditoPorId(id:number){
    const url = `${this.urlBase}/creditos/${id}`;
    return this.http.get(url);
  }

  crearCredito(creditos:CreditoModel){
    const url = `${this.urlBase}/creditos`;
    // const httpOptions = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');{ headers: httpOptions }
    return this.http.post(url, creditos);
  }

  obtenerCreditoPorIdUsuario(idUsuario:number){
    const url = `${this.urlBase}/creditos?idUsuario=${idUsuario}`;
    return this.http.get(url);
  }

  obtenercreditosPorEstado(estado:boolean){
    debugger;
    const url = `${this.urlBase}/creditos?estadoCredito=${estado}`;
    return this.http.get(url);
  }


}
