import { UsuarioModel } from './usuario';
export class CreditoModel {
  public id: number;
  public idUsuario: number;
  public usuario: UsuarioModel;
  public estadoCredito: boolean;
  public montoSolicitado: number;
  public fechaPagar: string;
  public pagoCredito:boolean;


  constructor() {
    this.id = 0;
    this.idUsuario = 0;
    this.estadoCredito = null,
    this.montoSolicitado = 0,
    this.usuario = new UsuarioModel();
    this.fechaPagar="";
    this.pagoCredito = false;
  }

}
