import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CortometrajesService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost/ts_2023/php/cortometraje_g1/';

  getCortometraje(){
    return this.http.get(
      `${this.url}ver_cortometraje.php`
    );
  }
}
