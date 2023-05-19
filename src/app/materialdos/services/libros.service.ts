import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }
  private url = 'https://telesecundaria.sep.gob.mx/php/libros/';

  getMenu(){
    return this.http.get(
      `${this.url}menu.php`
    );
  }

  getLibros(){
    return this.http.get(
      `${this.url}libros.php`
    );
  }

}
