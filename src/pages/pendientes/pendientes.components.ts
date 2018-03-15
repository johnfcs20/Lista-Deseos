import {Component, OnInit} from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista-deseos.service'
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.components'
import {DetalleComponent} from '../detalle/detalle.component'

@Component({

  selector: 'app-pendientes',
  templateUrl: 'pendientes.components.html',

})

export class PendientesComponent implements OnInit {
  constructor(private _listaDeseosService: ListaDeseosService,
              private navCtrl: NavController){}
  ngOnInit(){}

  IrAgregar(){
    this.navCtrl.push(AgregarComponent);

  }

  verdetalle(lista ,idx){
    this.navCtrl.push(DetalleComponent, {lista, idx});
  }

}
