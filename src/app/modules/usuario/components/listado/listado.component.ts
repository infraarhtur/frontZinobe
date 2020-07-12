import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { UsuarioModel } from '../../../../models/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import Swal from 'sweetalert2'

// import * as _ from 'lodash';
// declare var $: any;


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public usuarios: UsuarioModel[] = [];
  public idUsuario: number;
  constructor(
    public formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router
  ) {



  }

  ngOnInit(): void {
    this.obtenerUsuarios();


  }

  obtenerUsuarios() {
    this._usuarioService.obtenerUsuarios().subscribe(
      (res: UsuarioModel[]) => {

        this.usuarios = res;

      }, (error: Response) => {
        Swal.fire('Oops... error en la solicitud', 'Contactese con el desarrollador!', 'error');
        console.log('error controlado ', error);
      }

    );
  }


  abrirModal(id:number){
  this.idUsuario = id;

  }
  solicitarCredito(idUser){
    idUser = 1;
    this.router.navigate([`Credito/crearSolicitud/${idUser}`]);
  }

}
