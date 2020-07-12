import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CrearComponent } from './components/crear/crear.component';
import { ListadoComponent } from './components/listado/listado.component';



import {UsuarioRoutingModule } from './usuario.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';
 import { ModalCreditosUsuarioComponent } from './components/modal-creditos-usuario/modal-creditos-usuario.component';



@NgModule({
  declarations: [MainComponent, CrearComponent, ListadoComponent, ModalCreditosUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     TooltipModule,


  ]
})
export class UsuarioModule { }
