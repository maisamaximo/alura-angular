import { Transferencia } from './../models/transferencia/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private data_transferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.data_transferencias = [];
  }

  get transferencias() {
    return this.data_transferencias;
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.dataTransferencia(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  dataTransferencia(transferencia: any) {
    transferencia.data = new Date();
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }
}
