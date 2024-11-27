import { Component, Input } from '@angular/core';

@Component({
  selector: 'Carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent{

  //@Input() items: { titulo: string; imagem?: string }[] = [];
  @Input() items: any[] = [];
  @Input() nome: string = '';

  

}
