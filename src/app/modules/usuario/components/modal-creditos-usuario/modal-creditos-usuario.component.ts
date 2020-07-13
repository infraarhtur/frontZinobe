import { Component, OnInit,  Input , SimpleChanges, OnChanges} from '@angular/core';

import { FormBuilder} from '@angular/forms';
import { CreditoModel } from '../../../../models/credito';
import { CreditosService } from 'src/app/services/creditos.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-modal-creditos-usuario',
  templateUrl: './modal-creditos-usuario.component.html',
  styleUrls: ['./modal-creditos-usuario.component.css']
})
export class ModalCreditosUsuarioComponent implements OnInit , OnChanges{
  @Input() usuarioId: number;
  public creditos: CreditoModel[] = [];
  constructor( public formBuilder: FormBuilder,
    private _Creditoservice: CreditosService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
debugger;

this.obtenerCreditoPorIdUsuario(changes.usuarioId.currentValue);

  }
  obtenerCreditoPorIdUsuario(idUduario:number){
this._Creditoservice.obtenerCreditoPorIdUsuario(idUduario).subscribe((res:CreditoModel[])=>{
 this. creditos= res;
})
  }


}
