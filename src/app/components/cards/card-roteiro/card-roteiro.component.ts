import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-roteiro',
  templateUrl: './card-roteiro.component.html',
  styleUrls: ['./card-roteiro.component.scss'],
})
export class CardRoteiroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() titulo: string = '';
  @Input() imagem?: string;

}
