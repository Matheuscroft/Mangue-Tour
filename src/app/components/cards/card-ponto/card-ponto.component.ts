import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'CardPonto',
  templateUrl: './card-ponto.component.html',
  styleUrls: ['./card-ponto.component.scss'],
})
export class CardPontoComponent {

  @Input() ponto: any;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("this.ponto");
    console.log(this.ponto);
  }


  irParaDetalhe() {
    this.router.navigate(['/ponto-turistico', this.ponto.ID_Ponto], {
      queryParams: { ponto: JSON.stringify(this.ponto) }
    });
  }

}
