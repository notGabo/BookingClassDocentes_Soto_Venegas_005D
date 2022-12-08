import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetValueService } from '../../services/get-value.service';
import { LClase } from 'src/app/interfaces/l-clase';
import { ClasesService } from 'src/app/services/clases.service';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  newClase: LClase = {
    codigo: '',
    numero: '',
    horaInicio: '',
    horaTermino: '',
    sala: '',
  };

  constructor(private menuController: MenuController,
    private claseService: ClasesService) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  crearClase() {
    this.claseService.crearClase(this.newClase).subscribe();
  };


  onSubmit() {
    console.log('La clase se ha generado con exito');
    console.log(this.newClase);
    console.log('localGet de numero:' + this.newClase.numero);
    console.log('serviceGet de numero:' + GetValueService.numero);
    GetValueService.numero = this.newClase.numero.slice();
    GetValueService.codigo = this.newClase.codigo.slice();
    GetValueService.horaInicio = this.newClase.horaInicio.slice();
    GetValueService.horaTermino = this.newClase.horaTermino.slice();
    GetValueService.sala = this.newClase.sala.slice();

  };
}
