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
import { RouterModule, Routes } from '@angular/router';
const rutas:Routes=[
  {path:'park_eventuales',component:EventualesComponent},
  {path:'park_administracion',component:AdministracionComponent},
  {path:'park_mensuales',component:MensualesComponent},
  {path:'park_reporte_diario',component:ReporteDiarioComponent},
  {path:'park_mini_reporte_diario',component:MiniReporteDiarioComponent},
  {path:'park_mini_reporte_diario_totalizado',component:MiniReporteDiarioTotalizadoComponent},
  //cuando ingresemos a la ruta principal
  {path: '',component: HomeComponent,pathMatch:'full'},
  //cualquier otra ruta
  {path:'**', redirectTo:'./'}
]
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
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
