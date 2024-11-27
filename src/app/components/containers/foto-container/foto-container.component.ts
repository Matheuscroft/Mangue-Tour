import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'FotoContainer',
  templateUrl: './foto-container.component.html',
  styleUrls: ['./foto-container.component.scss'],
})
export class FotoContainerComponent  implements OnInit {

  @Input() fotos: string[] = [];
  constructor() { }

  ngOnInit() {}

}
