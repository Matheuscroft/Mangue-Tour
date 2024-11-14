import {
  Component,
  ElementRef,
  inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { environment } from 'src/environments/environment';

declare var google: any;

@Component({
  selector: 'app-map-comp',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
})
export class MapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  center = { lat: -8.0476, lng: -34.877 };
  map: any;
  private renderer = inject(Renderer2);

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    // Verifica se o objeto google e google.maps estão definidos
    if (typeof google === 'undefined' || !google.maps) {
      // Carrega o script da API do Google Maps dinamicamente
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBQp1CSuh_44lc8YBiRBT05-YQiT0RA1JY&libraries=places`;
      script.async = true;
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
  }
}
