import { Transferencia } from './../models/transferencia/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private data_transferencias: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
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

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }
}
