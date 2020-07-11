import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//#region components
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
import {CreditoRoutingModule } from './credito.routing';
//#endregion components

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './components/crear/crear.component';

@NgModule({
  declarations: [MainComponent, ListadoComponent, CrearComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreditoRoutingModule

  ]
})
export class CreditoModule { }
