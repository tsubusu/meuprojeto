import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, //módulo do Angular Animation para resolver o problema de transição do nosso modal.
    //BrowserAnimationsModule usa a web animations padrão do navegador que existe nos browsers
    //Os browsers mais antigos não suportam web API, então o que você tem que fazer? Você tem que ir no arquivo polifill.js Descomentar esse import do web Animation. Mas isso não é suficiente. Quando você descomentar, você tem que dar np install web-animations-js
    HeaderModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
