import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent {
  Ibusqueda: string;
  constructor() { 
    
  }
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
        slidesPerView: 2,
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
  
  Libros: Array<object> = [
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '1',
      asignatura: 'Lengua Materna.español',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Lengua Materna.español',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '2',
      asignatura: 'Matematicas',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Matematicas',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '5',
      asignatura: 'Historia',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Historia',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '6',
      asignatura: 'Formación Civica y Etica',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Formación Civica y Etica',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '3',
      asignatura: 'Ciencias. Biología',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Ciencias obscuras',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }  
  ]

  OtrosLibros: Array<object> = [
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '1',
      asignatura: 'Lengua Materna.español, Matemáticas',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Nuestro libro de proyectos',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    },
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '1',
      asignatura: 'Lengua Materna.español, Inglés, Nahuatl',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libro de Multiple Lenguajes',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    },
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_asignatura: '1',
      asignatura: 'Lengua Materna.español',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libro para el y la docente de Telesecundaria',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    },
  ]

  ngOnInit(): void {
  }

  receiveMessage($event) {
    this.Ibusqueda = $event;
  }

}
