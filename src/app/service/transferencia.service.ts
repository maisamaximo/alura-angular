import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private data_transferencias: any[];

  constructor() {
    this.data_transferencias = []
   }

   get transferencias() {
    return this.data_transferencias
   }

   adicionar(transferencia: any) {
     this.dataTransferencia(transferencia)

    this.data_transferencias.push(transferencia);
  }

  dataTransferencia(transferencia: any) {
    transferencia.date = new Date();
  }
}
