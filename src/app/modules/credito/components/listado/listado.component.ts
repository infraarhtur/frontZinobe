import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { CreditoModel } from '../../../../models/credito';
import { CreditosService } from 'src/app/services/creditos.service';
import { HttpErrorResponse } from '@angular/common/http';

import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public creditos: CreditoModel[] = [];
  public estadoCreditosUrl: boolean;
  constructor(
    public formBuilder: FormBuilder,
    private _Creditoservice: CreditosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {


  }

  ngOnInit(): void {

   console.log('parametro por url', this.activatedRoute.snapshot.paramMap.get('estadoCreditos'))
    if (this.activatedRoute.snapshot.paramMap.get('estadoCreditos') !== null && this.activatedRoute.snapshot.paramMap.get('estadoCreditos') !== undefined) {
      this.obtenercreditosPorEstado(this.activatedRoute.snapshot.paramMap.get('estadoCreditos'))
    } else {
      this.obtenerCreditos();
    }


  }

  obtenerCreditos() {

    this._Creditoservice.obtenerCreditos().subscribe(
      (res: CreditoModel[]) => {

        this.creditos = res;

      }

    );
  }
  obtenercreditosPorEstado(estado) {

    this._Creditoservice.obtenercreditosPorEstado(estado).subscribe(
      (res: CreditoModel[]) => {
        this.creditos = res;
      }

    );
  }



}
