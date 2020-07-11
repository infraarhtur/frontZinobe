import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { CreditoModel } from '../../../../models/credito';
import { CreditosService } from 'src/app/services/creditos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public creditos: CreditoModel[] = [];
  constructor(
    public formBuilder: FormBuilder,
    private _Creditoservice: CreditosService,
    private router: Router
  ) {



  }

  ngOnInit(): void {
    this.obtenerCreditos();
  }

  obtenerCreditos() {
    this._Creditoservice. obtenerCreditos().subscribe(
      (res: CreditoModel[]) => {

        this.creditos = res;

      }, (error: Response) => {
        Swal.fire('Oops... error en la solicitud', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado ', error);
      }

    );
  }

}
