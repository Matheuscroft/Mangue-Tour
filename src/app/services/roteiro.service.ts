import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoteiroService {

  private apiUrl = 'http://127.0.0.1:5000/roteiros'; 

  constructor(private http: HttpClient) { }

  getRoteirosList() {
    return this.http.get(this.apiUrl);  
  }

  registerRoteiros(data: any) {
    return this.http.post(this.apiUrl, data);  
  }
}
