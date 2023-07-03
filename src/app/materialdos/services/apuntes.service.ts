import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApuntesService {

  constructor(private http: HttpClient) { }
  private url = 'https://telesecundaria.sep.gob.mx/php/apuntes/';

  getMenu(){
    return this.http.get(
      `${this.url}menu_apuntes.php`
    );
  }

  getApuntes(){
    return this.http.get(
      `${this.url}lib_apuntes.php`
    );
  }

}
