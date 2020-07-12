import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//#region Directives
import { SoloNumerosDirective } from '../../directives/solo-numeros.directive';
//#endregion Directives

const directives = [

  SoloNumerosDirective
];

@NgModule({
  declarations: directives,
  imports: [CommonModule],
  exports: directives
})
export class DirectivesModule {}
