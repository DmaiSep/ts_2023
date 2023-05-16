import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost/33-ts_2023/php/';

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
