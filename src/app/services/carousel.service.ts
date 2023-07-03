import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }
  private url = 'https://telesecundaria.sep.gob.mx/php/carousel/';

  getCarousel(){
    return this.http.get(
      `${this.url}lib_carousel.php`
    );
  }
  
}
