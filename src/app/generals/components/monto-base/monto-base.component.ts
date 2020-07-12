import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreditoModel } from 'src/app/models/credito';
import { CreditosService } from 'src/app/services/creditos.service';

@Component({
  selector: 'app-monto-base',
  templateUrl: './monto-base.component.html',
  styleUrls: ['./monto-base.component.css']
})
export class MontoBaseComponent implements OnInit {
montoBase:number =0;
montoAprobados:number = 0;
montoGuardar:number = 0;

  constructor(
    private _creditoService: CreditosService,

  ) {


  }

  ngOnInit(): void {
    this.montoBase = environment.montoBase;
   this. validacionMontosAprobados()
  }
  ngDoCheck(): void {
  this. montoAprobados =Number(localStorage.getItem('totalMontoAprobados')) ;
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }

  validacionMontosAprobados(){
this._creditoService.obtenercreditosPorEstado(true).subscribe((res:CreditoModel[])=>{
  res.forEach((item:CreditoModel)=> {
    this.montoGuardar += Number(item.montoSolicitado) ;

  });

  localStorage.setItem('totalMontoAprobados', this.montoGuardar.toString() )
});
  }


}
