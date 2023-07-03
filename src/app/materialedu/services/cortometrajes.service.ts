import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CortometrajesService {

  constructor(private http: HttpClient) { }
  private url = 'https://telesecundaria.sep.gob.mx/php/cortometraje/';

  

  getCortometraje(){
    return this.http.get(
      `${this.url}ver_cortometraje.php`
    );
  }
}
