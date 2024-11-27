import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent{

  @Input() items: { titulo: string; imagem?: string }[] = [];
  @Input() nome: string = '';



}
