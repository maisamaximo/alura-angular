import { Transferencia } from './../../models/transferencia/transferencia.model';
import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaService } from 'src/app/service/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  data_transferencias: any[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
console.table(transferencias);
this.data_transferencias = transferencias
    });
  }
}
