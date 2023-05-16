import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-apuntes',
  templateUrl: './apuntes.component.html',
  styleUrls: ['./apuntes.component.scss']
})
export class ApuntesComponent {
  constructor(private httpClient: HttpClient) { }
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 5,
    loop: false,
    loopFillGroupWithBlank: false,
    breakpoints: {
      1368: {
        slidesPerView: 5,
        slidesPerGroup: 3,
      },
      1023: {
        slidesPerView: 4,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  }; 


  options = [
    { value: '1', label: 'Primer Grado' },
    { value: '2', label: 'Segundo Grado' },
    { value: '3', label: 'Tercer Grado' },
  ];
  asignatura = [
    { value: '1', label: 'Español' },
    { value: '2', label: 'Matematicas' },
    { value: '3', label: 'Fisica' },
    { value: '4', label: 'Historia' },
    { value: '5', label: 'Formación Civica y Etica' },
  ];
  bloque = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];
 
  Images: any = [
    {
      src: 'http://telesecundaria.sep.gob.mx/Content/Repositorio/apuntes/imagenes/1/Artes_visuales-1ro.png',
      name: 'Lengua Materna.español',
      alt: 'Image 1',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      name: 'Matematicas',
      alt: 'Image 2',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      name: 'Historia',
      alt: 'Image 3',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      name: 'Formación Civica y Etica',
      alt: 'Image 4',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      name: 'Ciencias',
      alt: 'Image 5',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      name: 'Lengua Materna.español',
      alt: 'Image 6',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }    
  ]
  ngOnInit(): void {
   

  }

}
