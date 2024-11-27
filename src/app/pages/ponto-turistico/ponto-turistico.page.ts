import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ponto-turistico',
  templateUrl: './ponto-turistico.page.html',
  styleUrls: ['./ponto-turistico.page.scss'],
})
export class PontoTuristicoPage implements OnInit {

  ponto: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ponto = JSON.parse(params['ponto']);
    });
  }
}
