import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Profesor, RegistroProfesorService, } from '../../services/registro-profesor.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  formularioRegistro: FormGroup;
  newProfesor: Profesor = <Profesor>{};
  profesor: Profesor[] = [];

  constructor(private alertController: AlertController,
    private registroProfesorService: RegistroProfesorService,
    private fb: FormBuilder,
    private toastController: ToastController,
    private navController: NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),

    })
  }

  ngOnInit() {
  }
  async CrearProfesor() {
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error...',
        message: 'Los datos ingresados no son correctos',
        buttons: ['aceptar'],
        cssClass: 'alertcss'
      });

      await alert.present();
      return;
    }
    this.newProfesor.nombreProfesor = form.nombre.charAt(0).toUpperCase() + form.nombre.slice(1).toLowerCase();
    this.newProfesor.emailProfesor = form.correo;
    this.newProfesor.password = form.password;
    this.newProfesor.apellidoProfesor = form.apellido.charAt(0).toUpperCase() + form.apellido.slice(1).toLowerCase();
    this.registroProfesorService.addProfesor(this.newProfesor).then(dato => {
      this.newProfesor = <Profesor>{};
      this.alertRegistro();
      this.showtoast('Usuario Creado');
    });
    this.formularioRegistro.reset();
  }

  async showtoast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  };


  async RevisarCorreo() {
    var a = 0;
    var f = this.formularioRegistro.value;

    this.registroProfesorService.getDatos().then(datos => {
      this.profesor = datos;
      if (!datos || datos.length == 0) {
        console.log('No hay usuarios creados');
      }
      else {
        for (let obj of this.profesor) {
          if (obj.emailProfesor == f.correo) { // aca quedamos.
            a = 1;
            console.log(f.correo);
          }
        }
      }
      console.log(a)
      if (a == 0) {
        this.CrearProfesor();
      } else {
        this.alertEmail();
      }
    });
  };

  async alertRegistro() {
    const alertRegistro = await this.alertController.create({
      header: '¡Cuenta creada!',
      message: '¿Deseas loguearte?',
      buttons: [
        {
          text: 'Si',
          role: 'Confirm',
          handler: () => {
            this.navController.navigateForward('/login');
          },
        },
        {
          text: 'No',
          role: 'Cancel'
        }
      ],
      cssClass: 'alertcss'
    })
    await alertRegistro.present();
  }


  async alertEmail() {
    const alert = await this.alertController.create({
      header: 'Email ya registrado',
      message: 'Por favor, pruebe con otro email',
      buttons: ['OK'],
      //custom css
      cssClass: 'alertcss'
    });
    await alert.present();
  };
}
