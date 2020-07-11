import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CrearComponent } from './components/crear/crear.component';
import { ListadoComponent } from './components/listado/listado.component';

import {UsuarioRoutingModule } from './usuario.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent, CrearComponent, ListadoComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ]
})
export class UsuarioModule { }
