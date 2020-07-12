import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//#region modules

import { CreditoModule } from './modules/credito/credito.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
//#endregion modules

import { AppComponent } from './app.component';
import { NavbarComponent } from './generals/components/navbar/navbar.component';
import { HomeComponent } from './generals/components/home/home.component';

//#region routing
import {AppRoutingModule } from '../app/app.routing';
//#endregion routing
import { TooltipModule } from 'ng2-tooltip-directive';
import { MontoBaseComponent } from './generals/components/monto-base/monto-base.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MontoBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),

    TooltipModule,
    CreditoModule,
    UsuarioModule,


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
