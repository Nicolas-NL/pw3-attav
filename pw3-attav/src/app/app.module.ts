import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaViagensComponent } from './lista-viagens/lista-viagens.component';
import { CadastraViagemComponent } from './cadastra-viagem/cadastra-viagem.component';
import { ExcluiViagemComponent } from './exclui-viagem/exclui-viagem.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaViagensComponent,
    CadastraViagemComponent,
    ExcluiViagemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
