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
    this.data_transferencias = this.service.transferencias;
  }
}
