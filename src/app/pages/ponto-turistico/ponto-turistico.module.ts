import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontoTuristicoPageRoutingModule } from './ponto-turistico-routing.module';

import { PontoTuristicoPage } from './ponto-turistico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontoTuristicoPageRoutingModule
  ],
  declarations: [PontoTuristicoPage]
})
export class PontoTuristicoPageModule {}
