import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//#region components
import { MainComponent } from './components/main/main.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
// import { EditarComponent } from './components/editar/editar.component';

//#endregion components


const UsuarioRoutes: Routes = [{
  path: 'Usuario', component: MainComponent,
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
    { path: 'crear', component: CrearComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(UsuarioRoutes)],
exports: [RouterModule]
})
export class UsuarioRoutingModule { }