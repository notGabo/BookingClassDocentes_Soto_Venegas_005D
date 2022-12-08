import { Component, OnInit } from '@angular/core';
import { GetValueService } from '../../services/get-value.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getNombre() {
    return GetValueService.nombre;
  }

  getApellido() {
    return GetValueService.apellido;
  }

  getCorreo() {
    return GetValueService.email;
  }

}
