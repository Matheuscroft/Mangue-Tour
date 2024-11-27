import { Component, Input } from '@angular/core';

@Component({
  selector: 'Carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent{

  //@Input() items: { titulo: string; imagem?: string }[] = [];
  @Input() items: { tipo: string, titulo: string, imagem?: string, endereco?: string, ano?: number, dataInicio?: string, dataFim?: string }[] = [];
  @Input() nome: string = '';

  

}
