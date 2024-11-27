import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PontosServicoService } from 'src/app/services/pontos-servico.service';
import { LatLngLiteral } from 'src/app/types/lat-lng-literal';

declare var google: any;

@Component({
  selector: 'app-map-comp',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
})

export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  center = { lat: -8.063164603842008, lng: -34.87109418036182 };
  map: any;
  marker: any;
  mapListener: any;
  markerListener: any;

  private renderer = inject(Renderer2);
  pontosTuristicosList: any = null;

  constructor(private pontosServicoService: PontosServicoService) {}

  ngOnInit() {
    this.pontosServicoService
      .getPontosTuristicosList()
      .subscribe((data: any) => {
        console.log(data);
        this.pontosTuristicosList = data;
      });
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    // Verifica se o objeto google e google.maps estão definidos
    if (typeof google === 'undefined' || !google.maps) {
      // Carrega o script da API do Google Maps dinamicamente
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBQp1CSuh_44lc8YBiRBT05-YQiT0RA1JY&libraries=places&loading=async`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Após o carregamento do script, inicializa o mapa
      script.onload = () => {
        this.initializeMap();
      };
      script.onerror = (error) => {
        console.error('Erro ao carregar o script do Google Maps:', error);
      };
    } else {
      this.initializeMap();
    }
  }

  initializeMap() {
    const mapEl = this.mapElementRef.nativeElement;

    const location = new google.maps.LatLng(this.center.lat, this.center.lng);

    this.map = new google.maps.Map(mapEl, {
      center: location,
      zoom: 15,
      mapId: '12fc846a698d6d87',
    });

    this.renderer.addClass(mapEl, 'visible');

    if (this.pontosTuristicosList && this.pontosTuristicosList.length > 0) {
    this.pontosTuristicosList.forEach((ponto: any) => {
      const location: LatLngLiteral = {
        lat: parseFloat(ponto.Latitude),
        lng: parseFloat(ponto.Longitude),
      };
      this.addMarker(location, ponto.Nome_Ponto, ponto.Descricao_Ponto);
    });
  } else {
    console.log('Nenhum ponto turístico encontrado');
  }
  }

  async addMarker(
    markerLocation: LatLngLiteral,
    title: string,
    contentHtml: string
  ) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

    const customContent = document.createElement('div');
    customContent.innerHTML = contentHtml;

    const marker = new AdvancedMarkerElement({
      position: markerLocation,
      map: this.map,
      content: customContent,
      title: title,
    });
  }

}
