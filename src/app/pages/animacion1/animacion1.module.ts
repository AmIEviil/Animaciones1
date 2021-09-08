import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion1PageRoutingModule } from './animacion1-routing.module';

import { Animacion1Page } from './animacion1.page';

import { AppModuleModule } from 'src/app/app-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppModuleModule,
    Animacion1PageRoutingModule
  ],
  declarations: [Animacion1Page]
})
export class Animacion1PageModule {}
