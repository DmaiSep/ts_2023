import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private url = 'https://telesecundaria.sep.gob.mx/php/visitas/';

  constructor(private http: HttpClient) {}
  postvisitas(id_m, id_t_m, id_a,tz){
    let dat = {
      id_material: id_m,
      id_tipo_material: id_t_m,
      id_accion: id_a,
      zona:tz
    }
    return this.http.post(
      `${this.url}lib_visitas.php`,dat
    );
  }
}
