import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarouselComponent } from './carousel/carousel.component';
import { CardRoteiroComponent } from './cards/card-roteiro/card-roteiro.component';

@NgModule({
  declarations: [CarouselComponent, CardRoteiroComponent],
  imports: [CommonModule, IonicModule],
  exports: [CarouselComponent, CardRoteiroComponent]  
})
export class ComponentsModule {}
