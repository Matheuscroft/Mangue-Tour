import { Component, OnInit } from '@angular/core';
import { PontosServicoService } from 'src/app/services/pontos-servico.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  pontosTuristicosList: any = null;

  constructor(private pontosServicoService: PontosServicoService) { }

  ngOnInit() {
    this.pontosServicoService.getPontosTuristicosList().subscribe((data: any) => {
      console.log(data);
      this.pontosTuristicosList = data.map((item: any) => ({
        ...item,
        tipo: 'ponto',
      }));
    });
  }
}
