import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'animacion1',
    loadChildren: () => import('./pages/animacion1/animacion1.module').then( m => m.Animacion1PageModule)
  },  {
    path: 'animacion2',
    loadChildren: () => import('./pages/animacion2/animacion2.module').then( m => m.Animacion2PageModule)
  },
  {
    path: 'animacion3',
    loadChildren: () => import('./pages/animacion3/animacion3.module').then( m => m.Animacion3PageModule)
  },
  {
    path: 'animacion4',
    loadChildren: () => import('./pages/animacion4/animacion4.module').then( m => m.Animacion4PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
