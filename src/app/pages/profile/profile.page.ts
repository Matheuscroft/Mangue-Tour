import { Component, OnInit } from '@angular/core';
import { PontosServicoService } from 'src/app/services/pontos-servico.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  pontosTuristicosList: any = null;
  roteiros: any[] = [
    { tipo: 'roteiro', titulo: 'Tour Igrejas Recife', detalhes: 'Detalhes do roteiro 1' },
    { tipo: 'roteiro', titulo: 'Estátuas Culturais', detalhes: 'Detalhes do roteiro 2' },
    { tipo: 'roteiro', titulo: 'Pontes Recife', detalhes: 'Detalhes do roteiro 3' }
  ];

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
