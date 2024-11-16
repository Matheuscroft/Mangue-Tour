import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PontosServicoService {

  private apiUrl = 'http://127.0.0.1:5000/pontos'; 

  constructor(private http: HttpClient) { }

  getPontosTuristicosList() {
    return this.http.get(this.apiUrl);  
  }

  registerPontosTuristicos(data: any) {
    return this.http.post(this.apiUrl, data);  
  }
}

