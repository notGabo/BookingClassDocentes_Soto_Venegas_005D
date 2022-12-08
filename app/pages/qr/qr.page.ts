import { Component, OnInit } from '@angular/core';
import { GetValueService } from '../../services/get-value.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public getNumeroClase() {
    return GetValueService.numero;
  };

  public getCodigoClase() {
    return GetValueService.codigo;
  };

  public getHoraInicio() {
    return GetValueService.horaInicio;
  };

  public getHoraTermino() {
    return GetValueService.horaTermino;
  };

  public getSala() {
    return GetValueService.sala;
  };

  public randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  constructor() { }

  ngOnInit() {
  }

}
