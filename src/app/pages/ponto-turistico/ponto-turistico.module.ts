import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontoTuristicoPageRoutingModule } from './ponto-turistico-routing.module';

import { PontoTuristicoPage } from './ponto-turistico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontoTuristicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PontoTuristicoPage]
})
export class PontoTuristicoPageModule {}
