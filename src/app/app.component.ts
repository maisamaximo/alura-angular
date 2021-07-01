import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mxbank';
  data_transferencia: any;

  transferir($event: any) {
    this.data_transferencia = $event;
  }
}
