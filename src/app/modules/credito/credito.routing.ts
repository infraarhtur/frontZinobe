import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//#region components
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
// import { EditarComponent } from './components/editar/editar.component';

//#endregion components


const CreditoRoutes: Routes = [{
  path: 'Credito', component: MainComponent,
  // canActivate: [
  //   LoginGuard,
  //   AuthGuard
  // ],
  // canActivateChild: [
  //   LoginGuard,
  //   AuthGuard
  // ],
  children: [
    { path: '', redirectTo: 'listado', pathMatch: 'full' },
    { path: 'listado', component: ListadoComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(CreditoRoutes)],
exports: [RouterModule]
})
export class CreditoRoutingModule { }
