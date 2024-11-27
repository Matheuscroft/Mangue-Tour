import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ponto-turistico',
  templateUrl: './ponto-turistico.page.html',
  styleUrls: ['./ponto-turistico.page.scss'],
})
export class PontoTuristicoPage implements OnInit {

  ponto: any;

  fotosPorPonto: { [key: number]: string[] } = {
    1: [
      'https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/_museu_da_cidade_do_recife_2.jpg?itok=ybnaKIC1',
      'https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2023/04/museu-do-recife-forte-das-cinco-pontas-foto-arthur-de-souza-31.jpg',
      'https://cdn.folhape.com.br/upload/dn_arquivo/2023/04/museu-do-recife-forte-das-cinco-pontas-foto-ed-machado-25.jpg',
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/01/edw-2119.jpg'
    ],
    2: [
      'https://visit.recife.br/wp-content/uploads/2018/04/o-que-fazer-museo-militar-forte-do-brum-02.jpg',
      'https://visit.recife.br/wp-content/uploads/2018/04/o-que-fazer-museo-militar-forte-do-brum-01.jpg',
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/04/forte-do-brum-foto-arthur-de-souza-01.jpg',
      'https://cdn.folhape.com.br/upload/dn_arquivo/2023/04/forte-do-brum-14.jpg'
    ],
    3: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFAwFOBsKRV7qSXbuONyZngLpTiadYIs5TQ&s',
      'https://revistacontinente.com.br/public/uploads/data/files/mamam_fachada.JPG',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStj1o5dwKlA_9eQ7i1g2YP3wfwlWUwV7XfmQ&s',
      'https://visit.recife.br/wp-content/uploads/2018/03/arte-destaque-mamam2.jpg'
    ],
    4: [
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Igreja_S._Francisco.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0b/7c/11/e5/n-santo-antonio-recife.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2O3C4QsUByxH7_eEQp8rKwvK5OX1XAu_IQ&s',
      'https://media-cdn.tripadvisor.com/media/photo-s/09/5d/26/8b/museu-de-arte-sacra-franciscan.jpg'
    ],
    5: [
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/04/museu-instituto-arqueologico-foto-ed-machado-01.jpg',
      'https://visit.recife.br/wp-content/uploads/2019/02/o-que-fazer-instituto-geografico-destaque1.jpg',
      'https://visit.recife.br/wp-content/uploads/2019/02/o-que-fazer-instituto-geografico-destaque.jpg',
      'https://cdn.folhape.com.br/upload/dn_arquivo/2023/04/museu-instituto-arqueologico-foto-ed-machado-12.jpg'
    ],
    6: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/cc/a3/3b/museu-de-arte-popular.jpg?w=1200&h=-1&s=1',
      'https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/acervo_museu_de_arte_popular_-_foto_bruno_castanha_1.jpg?itok=X9TmizNv',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/cc/a3/3f/museu-de-arte-popular.jpg?w=700&h=400&s=1',
      'https://media-cdn.tripadvisor.com/media/photo-s/05/cc/a2/b8/museu-de-arte-popular.jpg'
    ],
    7: [
      'https://images.adsttc.com/media/images/5c11/967e/08a5/e54b/ad00/0941/large_jpg/5MG_4293.jpg?1544656467',
      'https://cdn.folhape.com.br/upload/dn_arquivo/2022/02/274506671-10159330166672672-3035789032132087679-n.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdMj1Y4JvEsBv2N6OZWc7jGTLOnDc59mUDg&s',
      'https://cdn.brasildefato.com.br/media/071edca2aa78adf09929e0f76ac29be7.jpg'
    ],
    8: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYMzs54MR5c82EtXEz_kWtpReRbFb_uBALA&s',
      'https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/rlo_5514.jpg?itok=THY-GPub',
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/04/casa-do-carnaval-foto-alfeu-tavares-01.jpg',
      'https://cdn.folhape.com.br/upload/dn_arquivo/2023/04/casa-do-carnaval-foto-alfeu-tavares-04.jpg'
    ],
    9: [
      'https://visit.recife.br/wp-content/uploads/2017/10/arte-destaque-torre-malakoff.jpg',
      'https://visit.recife.br/wp-content/uploads/2017/10/torre-malakoff-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DosHk3QAfFpYgsqAn1J0MOaP_gNh8ZHkGQ&s',
      'https://visit.recife.br/wp-content/uploads/2017/10/arte-torre-malakoff.jpg'
    ],
    10: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlAE5dsRyarHJNsmBZO-GvegUiJSm0avLOA&s',
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/04/sinagoga-kahal-zur-israel-foto-ed-machado-11.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTei0AxCoVOF1iYQUH5FULpMH0aPJqc4HPZgA&s',
      'https://visit.recife.br/wp-content/uploads/2017/10/o-que-fazer-kahal-zur-israel-01.jpg'
    ],
  };
  

  fotos: string[] = [];
  

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

 
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.ponto = JSON.parse(params['ponto']);
      const pontoId = this.ponto?.ID_Ponto; 
      this.fotos = this.fotosPorPonto[pontoId] || [];       
    });
  }

  goBack() {
    this.navCtrl.back(); 
  }
}
