import { TransferenciaService } from './service/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mxbank';

  constructor(private service: TransferenciaService){}

    transferir($event: any) {
    this.service.adicionar($event);
  }
}
