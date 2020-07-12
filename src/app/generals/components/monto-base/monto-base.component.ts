import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-monto-base',
  templateUrl: './monto-base.component.html',
  styleUrls: ['./monto-base.component.css']
})
export class MontoBaseComponent implements OnInit {
montoBase:number =0;
  constructor() {


  }

  ngOnInit(): void {
    this.montoBase = environment.montoBase;
  }

}
