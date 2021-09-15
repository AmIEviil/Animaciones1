import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes,RouterModule } from '@angular/router';
const routes : Routes=[{
  path: '',
  component:TabsPage,
  children: [
    {
      path: 'home',
      loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'animacion1',
      loadChildren: () => import('../../pages/animacion1/animacion1.module').then( m => m.Animacion1PageModule)
    },
    {
      path: 'animacion2',
      loadChildren: () => import('../../pages/animacion2/animacion2.module').then( m => m.Animacion2PageModule)
    },
  ]
}]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
