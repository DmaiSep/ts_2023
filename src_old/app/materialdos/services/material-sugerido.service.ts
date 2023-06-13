import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialSugeridoService {
  private url = 'https://telesecundaria.sep.gob.mx/php/material_sugerido/';

  constructor(private http: HttpClient) { }
  getMaterial_sugerido(){
    return this.http.get(
      `${this.url}material_sugerido.php`
    );
  }
}
