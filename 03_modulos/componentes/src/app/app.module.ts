// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos de la aplicacion
import { SharedModule } from './shared/shared.module';

// Componentes del modulo
import { AppComponent } from './app.component';
import { LadoComponent } from './lado/lado.components';

@NgModule({
  declarations: [
    AppComponent,
    LadoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
