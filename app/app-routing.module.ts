import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './guards/no-ingresado.guard';
import { IngresadoGuard } from './guards/ingresado.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then(m => m.RegistrarsePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./pages/menu-profesor/menu-profesor.module').then(m => m.MenuProfesorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(m => m.ConfiguracionPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then(m => m.CodigoQrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then(m => m.QrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'feriados',
    loadChildren: () => import('./pages/feriados/feriados.module').then(m => m.FeriadosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'listar-clases',
    loadChildren: () => import('./pages/listar-clases/listar-clases.module').then(m => m.ListarClasesPageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
