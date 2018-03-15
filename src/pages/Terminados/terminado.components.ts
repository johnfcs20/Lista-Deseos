import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service'
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.components'
import {DetalleComponent} from '../detalle/detalle.component'

@Component({

  selector: 'app-terminados',
  templateUrl: 'terminados.components.html',

})

export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseosService: ListaDeseosService,
    private navCtrl: NavController){}
  ngOnInit(){}

  verdetalle(lista ,idx){
    this.navCtrl.push(DetalleComponent, {lista, idx});
  }
}
