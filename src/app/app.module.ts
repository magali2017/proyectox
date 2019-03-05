import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EventualesComponent } from './components/eventuales/eventuales.component';
import { MensualesComponent } from './components/mensuales/mensuales.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ReporteDiarioComponent } from './components/reporte-diario/reporte-diario.component';
import { MiniReporteDiarioComponent } from './components/mini-reporte-diario/mini-reporte-diario.component';
import { MiniReporteDiarioTotalizadoComponent } from './components/mini-reporte-diario-totalizado/mini-reporte-diario-totalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventualesComponent,
    MensualesComponent,
    AdministracionComponent,
    ReporteDiarioComponent,
    MiniReporteDiarioComponent,
    MiniReporteDiarioTotalizadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
