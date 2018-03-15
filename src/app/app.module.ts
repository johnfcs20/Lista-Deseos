import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Componentes
import {PendientesComponent} from '../pages/pendientes/pendientes.components';
import {TerminadosComponent} from '../pages/Terminados/terminado.components';
import {AgregarComponent} from '../pages/agregar/agregar.components';
import {} from '../pages/agregar/agregar.components';
import { DetalleComponent } from '../pages/detalle/detalle.component';


//servicios

import { ListaDeseosService } from './services/lista-deseos.service';

//Pipes

import {PlaceHolderPipe} from './pipes/placeholder.pipe'
import {PendientesPipe} from './pipes/pendientes.pipe'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    PlaceHolderPipe,
    DetalleComponent,
    PendientesPipe

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
