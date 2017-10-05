

// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Modulos propios
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { EnlacesModule } from './enlaces/enlaces.module';
import { AutoresModule } from './autores/autores.module';
import { AboutModule } from './about/about.module';
import { appRouting } from './app.routing';
// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AutoresComponent } from './autores/autores.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    AutoresComponent,
    EnlacesComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    SharedModule,
    HomeModule,
    EnlacesModule,
    AutoresModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }