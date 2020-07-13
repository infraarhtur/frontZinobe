import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//#region components
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
// import { EditarComponent } from './components/editar/editar.component';

//#endregion components


const CreditoRoutes: Routes = [{
  path: '', component: MainComponent,

  children: [
    { path: '', redirectTo: 'listado', pathMatch: 'full' },
    { path: 'listado', component: ListadoComponent},
    { path: 'crear', component: CrearComponent},
    { path: 'crearSolicitud/:idUsuario', component: CrearComponent},
    { path: 'listadoCreditosRechazados/:estadoCreditos', component: ListadoComponent},
    { path: 'listadoCreditosAprovados/:estadoCreditos', component: ListadoComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(CreditoRoutes)],
exports: [RouterModule]
})
export class CreditoRoutingModule { }
