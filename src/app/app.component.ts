import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mxbank';
  data_transferencias: any[] = [];

  transferir($event: any) {
    const transferencia = { ...$event, date: new Date() };
    this.data_transferencias.push(transferencia);
  }
}
