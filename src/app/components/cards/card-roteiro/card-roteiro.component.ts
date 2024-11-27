import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'CardRoteiro',
  templateUrl: './card-roteiro.component.html',
  styleUrls: ['./card-roteiro.component.scss'],
})
export class CardRoteiroComponent  implements OnInit {

  @Input() roteiro: any;

  constructor(private router: Router) { }

  ngOnInit() {}

  @Input() titulo: string = '';
  @Input() imagem?: string;

  


  irParaDetalhe() {
    this.router.navigate(['/roteiro'], {
      queryParams: { roteiro: JSON.stringify(this.roteiro) }
    });
  }

}
