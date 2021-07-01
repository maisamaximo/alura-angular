import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransferenciaComponent } from './transferencia/transferencia/transferencia.component';
import { ExtratoComponent } from './transferencia/extrato/extrato.component';

@NgModule({
  declarations: [AppComponent, TransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
