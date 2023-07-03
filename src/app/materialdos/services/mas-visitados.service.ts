import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasVisitadosService {
  private url = 'https://telesecundaria.sep.gob.mx/php/masVisto/';

  constructor(private http: HttpClient) { }
  getMateriales(){
    return this.http.get(
      `${this.url}masVisto.php`
    );
  }
}
