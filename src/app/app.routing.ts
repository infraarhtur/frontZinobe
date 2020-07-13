import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
  import {UsuarioModule} from 'src/app/modules/usuario/usuario.module';
import { CreditoModule } from './modules/credito/credito.module';
//#region Componentes
import { HomeComponent } from './generals/components/home/home.component';
//#endregion Componentes

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'Usuario',
    loadChildren: 'src/app/modules/usuario/usuario.module#UsuarioModule'
  },

  {
    path: 'Credito',
    loadChildren: 'src/app/modules/credito/credito.module#CreditoModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:false,
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
