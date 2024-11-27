import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-roteiro',
  templateUrl: './roteiro.page.html',
  styleUrls: ['./roteiro.page.scss'],
})
export class RoteiroPage implements OnInit {

  roteiro: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['roteiro']) {
        this.roteiro = JSON.parse(params['roteiro']); 
      }
    });
  }


  goBack() {
    this.navCtrl.back(); 
  }

}
