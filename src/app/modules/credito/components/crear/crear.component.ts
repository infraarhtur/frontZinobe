import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import {CreditoModel } from '../../../../models/credito';
import {CreditosService } from '../../../../services/creditos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public frmCrearCredito: FormGroup;
  public credito: CreditoModel;
  constructor(
    public formBuilder: FormBuilder,
    private _creditoService: CreditosService,
    private router: Router

  ) {

   }

  ngOnInit(): void {
  }
  validacionesFormulario() {

    this.frmCrearCredito = this.formBuilder.group({

      montoSolicitado: this.formBuilder.control('',[Validators.required]),
      fechaPagar: this.formBuilder.control('' ),
      pagoCredito: this.formBuilder.control(''),
      idUsuario: this.formBuilder.control('',[Validators.required])
    });
  }


}
