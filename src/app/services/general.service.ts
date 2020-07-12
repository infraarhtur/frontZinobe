import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import {CreditoModel} from 'src/app/models/credito';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public urlBase = '';
  constructor(private http: HttpClient) {

    this.urlBase = environment.urlBaseServicio;
  }



}
