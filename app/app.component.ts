import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController, private router: Router,
    private navController: NavController) { }
  componentes: Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirectTo: '/inicio'
    },
    {
      icon: 'log-in-outline',
      name: 'Crear clase',
      redirectTo: '/codigo-qr'
    },
    {
      icon: 'book-outline',
      name: 'Revisar clases',
      redirectTo: '/listar-clases'
    },
    {
      icon: 'settings-outline',
      name: 'Configuración',
      redirectTo: '/configuracion'
    },
    {
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirectTo: '/perfil'
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirectTo: '/noticias'
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar sesión',
      redirectTo: '/intro',
    }

  ];

  public hasMenu = true;

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event.url in ['/', '/codigo-qr', '/escanear-qr', '/configuracion', '/generador-qr', '/home-alumno', '/home-profesor', '/login-alumno', '/login-profesor', '/menu-alumno', '/register']) {
        this.hasMenu = false;
      }
      else {
        this.hasMenu = true;
      }
    });
  };
  logOut() {
    localStorage.clear();
    this.navController.navigateRoot('intro')
  }

}

