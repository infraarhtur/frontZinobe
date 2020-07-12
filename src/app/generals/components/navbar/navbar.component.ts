import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
redireccionarAestadoCredito(estado){
  this.router.navigate([`Credito/listadoEstadoCreditos/${estado}`]);
}
}
