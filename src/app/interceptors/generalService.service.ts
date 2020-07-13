import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('paso por el interceptor');
    const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=UTF-8');

    const reqClone = req.clone({
      headers: headers
    })

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }



  manejarError(error: HttpErrorResponse) {
    console.log('sucedio un error');
    console.log('Error Registrado');
    console.warn(Error);
    // Swal.fire('Oops... error en la solicitud', 'Contactese con el desarrollador!', 'error');
    Swal.fire('Oops... error en la solicitud', 'desde el interceptor!', 'error');
    return throwError('Error Personalizado')


  }
}
