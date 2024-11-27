import { Component, Input } from '@angular/core';

@Component({
  selector: 'CardViagem',
  templateUrl: './card-viagem.component.html',
  styleUrls: ['./card-viagem.component.scss'],
})
export class CardViagemComponent {

  @Input() titulo: string = '';
  @Input() ano?: number;
  @Input() dataInicio?: string;
  @Input() dataFim?: string;

}
