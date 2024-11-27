import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'InformacaoItemSpan',
  templateUrl: './informacao-item.component.html',
  styleUrls: ['./informacao-item.component.scss'],
})
export class InformacaoItemComponent  implements OnInit {

  @Input() icone!: string;
  @Input() texto!: string;

  constructor() { }

  ngOnInit() {}

}
