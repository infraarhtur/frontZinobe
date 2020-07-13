import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { CreditoModel } from '../../../../models/credito';
import { CreditosService } from '../../../../services/creditos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { UsuarioService } from '../../../../services/usuario.service';
import { UsuarioModel } from '../../../../models/usuario';
import { selectInicial } from 'src/app/directives/validators/select.validators';
import { environment } from 'src/environments/environment';


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
  public  idUsuarioPorUrl: number;
  public rangoMinimo:number;
  public rangoMaximo:number;
public creditosUsuario:CreditoModel[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private _creditoService: CreditosService,
    private _usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {

this.rangoMinimo = environment.montoMinimo;
this.rangoMaximo= environment.montoMaximo;
    this.esPagoCredito = false;
    this.idUsuario = undefined;

if(this.activatedRoute.snapshot.paramMap.get('idUsuario') !== null){
  this.idUsuario  = Number(this.activatedRoute.snapshot.paramMap.get('idUsuario'));
  debugger
 this.obtenerUsarioPorId();
}

    // this.idUsuarioPorUrl=Number(this.activatedRoute.snapshot.paramMap.get('idUsuario'))

  }

  ngOnInit(): void {


    this.validacionesFormulario();
    this.listaUsuarios();
  }
  validacionesFormulario() {

    this.frmCrearCredito = this.formBuilder.group({
      montoSolicitado: this.formBuilder.control('', [Validators.required,Validators.min(this.rangoMinimo) , Validators.max(this.rangoMaximo)]),
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

let totalMontoAprobados = Number(localStorage.getItem('totalMontoAprobados')) ;
if(totalMontoAprobados >= Number(environment.montoBase) ){

  Swal.fire('Monto base al limite', 'No se pueden crear más créditos por que el monto total de créditos aprobados es mayor o igual a monto base', 'warning');
  return
}


    this._creditoService.crearCredito(this.credito).subscribe((res: CreditoModel) => {
      if (res.estadoCredito) {
        Swal.fire('Crédito registrado y aprobado con éxito', 'Crédito aprobado con éxito', 'success');
        this.validacionMontosAprobados();
      } else {
        Swal.fire('Crédito registrado Pero fue rechazado', 'Crédito rechazado!', 'info');
      }
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
  validacionMontosAprobados(){
    let montoGuardar =0;
    this._creditoService.obtenercreditosPorEstado(true).subscribe((res:CreditoModel[])=>{
      res.forEach((item:CreditoModel)=> {
        montoGuardar += Number(item.montoSolicitado) ;

      });

      localStorage.setItem('totalMontoAprobados', montoGuardar.toString() )
    });
      }
}
