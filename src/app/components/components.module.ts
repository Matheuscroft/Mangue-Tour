import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { CardRoteiroComponent } from './cards/card-roteiro/card-roteiro.component';
import { CardPontoComponent } from './cards/card-ponto/card-ponto.component';
import { CardViagemComponent } from './cards/card-viagem/card-viagem.component';

@NgModule({
  declarations: [CarouselComponent, CardRoteiroComponent, CardPontoComponent, CardViagemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CarouselComponent, CardRoteiroComponent, CardPontoComponent, CardViagemComponent]  
})
export class ComponentsModule {}
