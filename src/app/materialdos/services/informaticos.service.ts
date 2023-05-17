import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformaticosService {

  constructor(private http: HttpClient) { }
  private url = 'https://telesecundaria.sep.gob.mx/php/informaticos/';

  getMenu(){
    return this.http.get(
      `${this.url}menu_Informaticos.php`
    );
  }

  getInformaticos(){
    return this.http.get(
      `${this.url}lib_mat_informaticos.php`
    );
  }
}
