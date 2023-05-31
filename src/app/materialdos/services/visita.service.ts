import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private url = 'https://telesecundaria.sep.gob.mx/php/visitas/';

  constructor(private http: HttpClient) {}
  postvisitas(){
    let dat = {
      id_material:'',
      id_tipo_material:'',
      id_accion:'',
      zona:''
    }
    return this.http.post(
      `${this.url}lib_visitas.php`,dat
    );
  }
}
