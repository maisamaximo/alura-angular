import { Transferencia } from './../../models/transferencia/transferencia.model';
import { TransferenciaService } from 'src/app/service/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService) {}

  transferir() {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpaCampos();
      },
      (error) => console.error()
    );
  }

  limpaCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
