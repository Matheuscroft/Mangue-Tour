import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardPonto',
  templateUrl: './card-ponto.component.html',
  styleUrls: ['./card-ponto.component.scss'],
})
export class CardPontoComponent {

  @Input() titulo: string = '';
  @Input() endereco?: string;

}
