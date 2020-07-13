import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { UsuarioModel } from '../../../../models/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'user-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public frmCrearUsuario: FormGroup;
  public usuario: UsuarioModel;


  constructor(
    public formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.validacionesFormulario();

  }

  validacionesFormulario() {

    this.frmCrearUsuario = this.formBuilder.group({

      Nombre: this.formBuilder.control('',[Validators.required]),
      Documento: this.formBuilder.control('',[Validators.required] ),

      Correo: this.formBuilder.control('',[Validators.required, Validators.email])
    });
  }

  CrearUsuario(){
    this.usuario = new UsuarioModel();
    this.usuario.nombre = this.frmCrearUsuario.value.Nombre;
    this.usuario.documento = this.frmCrearUsuario.value.Documento;
    this.usuario.correo = this.frmCrearUsuario.value.Correo;

 this._usuarioService.crearUsuario(this.usuario).subscribe(
  (res:UsuarioModel) =>{
    Swal.fire('Usuario registrado con éxito', 'Buen trabajo!', 'success');

  }
);
  }

}
