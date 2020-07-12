import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//#region components
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
import {CreditoRoutingModule } from './credito.routing';
//#endregion components

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './components/crear/crear.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DirectivesModule } from 'src/app/modules/directivas/directivas.module';
@NgModule({
  declarations: [MainComponent, ListadoComponent, CrearComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreditoRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    DirectivesModule
  ]
})
export class CreditoModule { }
