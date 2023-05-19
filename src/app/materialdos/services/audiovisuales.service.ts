import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudiovisualesService {
  private url = 'https://telesecundaria.sep.gob.mx/php/audiovisuales/';

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(
      `${this.url}menu_mat_audiovisuales.php`
    );
  }

  getAudiovisuales(){
    return this.http.get(
      `${this.url}lib_mat_audiovisuales.php`
    );
  }

}
