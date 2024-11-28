import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { CardRoteiroComponent } from './cards/card-roteiro/card-roteiro.component';
import { CardPontoComponent } from './cards/card-ponto/card-ponto.component';
import { CardViagemComponent } from './cards/card-viagem/card-viagem.component';
import { FotoContainerComponent } from './containers/foto-container/foto-container.component';
import { InformacaoItemComponent } from './spans/informacao-item/informacao-item.component';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  declarations: [CarouselComponent, CardRoteiroComponent, CardPontoComponent, CardViagemComponent, FotoContainerComponent,
    InformacaoItemComponent
  ],
  imports: [CommonModule, IonicModule, PipeModule],
  exports: [CarouselComponent, CardRoteiroComponent, CardPontoComponent, CardViagemComponent, FotoContainerComponent,
    InformacaoItemComponent
  ]
})
export class ComponentsModule { }
