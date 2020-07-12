import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { CreditoModel } from '../../../../models/credito';
import { CreditosService } from '../../../../services/creditos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { UsuarioService } from '../../../../services/usuario.service';
import { UsuarioModel } from '../../../../models/usuario';
import { selectInicial } from 'src/app/directives/validators/select.validators';



@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public frmCrearCredito: FormGroup;
  public credito: CreditoModel;
  public usuarioAsociado: UsuarioModel;
  public usuarios: UsuarioModel[] = [];
  public valorLeatorio: any;
  public esPagoCredito: boolean;
  public idUsuario: number;
public creditosUsuario:CreditoModel[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private _creditoService: CreditosService,
    private _usuarioService: UsuarioService,
    private router: Router

  ) {
    this.esPagoCredito = false;
    this.idUsuario = undefined;
  }

  ngOnInit(): void {


    this.validacionesFormulario();
    this.listaUsuarios();
  }
  validacionesFormulario() {

    this.frmCrearCredito = this.formBuilder.group({
      montoSolicitado: this.formBuilder.control('', [Validators.required]),
      fechaPagar: this.formBuilder.control(''),
      pagoCredito: this.formBuilder.control(''),
      usuario: this.formBuilder.control(undefined, [Validators.required])

    });
  }

  CrearCredito() {
    this.credito = new CreditoModel();
    this.credito.montoSolicitado = this.frmCrearCredito.value.montoSolicitado;
    this.credito.fechaPagar = this.frmCrearCredito.value.fechaPagar;
    this.credito.pagoCredito = this.frmCrearCredito.value.pagoCredito;
    this.credito.usuario = this.usuarioAsociado;
    this.credito.idUsuario = this.idUsuario;


    this.credito.estadoCredito = Boolean(Math.round(Math.random()));
    this._creditoService.crearCredito(this.credito).subscribe((res: CreditoModel) => {
      if (res.estadoCredito) {
        Swal.fire('Crédito registrado y aprobado con éxito', 'Crédito aprobado con éxito', 'success');
      } else {
        Swal.fire('Crédito registrado Pero fue rechazado', 'Crédito rechazado!', 'info');
      }


    }, (error: Response) => {
      Swal.fire('Oops... error en la solicitud', 'Contactese con el desarrollador!', 'error');
      console.log('error controlado ', error);
    })
  }

  listaUsuarios() {
    this._usuarioService.obtenerUsuarios().subscribe(
      (res: UsuarioModel[]) => {

        this.usuarios = res;

      }, (error: Response) => {
        Swal.fire('Oops... error en la solicitud', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado ', error);
      }

    );
  }

  obtenerUsarioPorId() {
    debugger;
    if (this.idUsuario === null || !Number(this.idUsuario)) {
      this.idUsuario = undefined;
      return;
    }
    this._usuarioService.obtenerUsuarioPorId(this.idUsuario).subscribe((res: UsuarioModel) => {

      this.usuarioAsociado = res;
    });

  }

  creditosPorUsuario() {
    // creditosUsuario

    this._creditoService.obtenerCreditoPorIdUsuario(this.idUsuario).subscribe((res:CreditoModel[])=>{

      this.creditosUsuario= res;
    })

  }

}
