import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Profesor, RegistroProfesorService, } from '../../services/registro-profesor.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GetValueService } from '../../services/get-value.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  profesor: Profesor[];

  constructor(private alertController: AlertController,
    private navController: NavController,
    private registroProfesorService: RegistroProfesorService,
    private fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    })
  }
  async Ingresar() {
    var formulario = this.formularioLogin.value;
    var i = 0;
    this.registroProfesorService.getDatos().then(datos => {
      this.profesor = datos;
      if (!datos || datos.length == 0) {
        this.noUsersMsg()
        return null;
      }

      for (let obj of this.profesor) {
        if (obj.emailProfesor == formulario.correo && obj.password == formulario.password) {
          i = 1;
          GetValueService.email = obj.emailProfesor;
          GetValueService.nombre = obj.nombreProfesor;
          GetValueService.apellido = obj.apellidoProfesor;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('inicio');
        }
      }
      if (i == 0) {
        this.alertMsg();
      }
    });
  }

  async noUsersMsg() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No hay usuarios creados',
      buttons: ['OK'],
      cssClass: 'alertcss'
    });
    await alert.present();
    return;
  }

  async alertMsg() {
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados no son correctos',
      buttons: ['aceptar'],
      cssClass: 'alertcss'
    });
    await alert.present();
    return;
  }

  ngOnInit() {
  };

}
