import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public recentData = [
    'Cais do Sertão',
    'Teatro de Santa Isabel',
    'Paço Alfândega',
    'Marco Zero',
  ];
  public results = [...this.recentData];

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    this.results = this.recentData.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  constructor() { }

  ngOnInit() {
  }

}
