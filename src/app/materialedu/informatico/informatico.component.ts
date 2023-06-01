import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-informatico',
  templateUrl: './informatico.component.html',
  styleUrls: ['./informatico.component.scss']
})
export class InformaticoComponent {
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
        slidesPerView: 4,
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
      id_categoria:'1',
      categoria: 'Saberes disciplinares',
      asignaturas: 'Español Inglés Lengua indígena como lengua materna lengua indígena como segunda lengua artes ',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Lenguajes',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Saberes disciplinares',
      asignaturas: 'Formación civica y etica Geografía Historia',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Ética, Naturaleza y sociedades',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Saberes disciplinares',
      asignaturas: 'Biología Matematicas',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Saberes y pensamiento científico',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Saberes disciplinares',
      asignaturas: 'educación física tecnologías tutoría educación socioemocional',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'De lo humano a lo comunitario',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    },
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Proyectos',
      asignaturas: 'Proyectos',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libros de nuestros proyectos 1',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Proyectos',
      asignaturas: '',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libros de nuestros proyectos 2',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    }, {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Historia/3_51.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Proyectos',
      asignaturas: '',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libros de nuestros proyectos 3',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf'
    },
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Multiples lenguajes',
      asignaturas: '',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libro de multiples lenguajes',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    },
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
      id_material:'1',
      material: 'Libro',
      id_categoria:'1',
      categoria: 'Docente',
      asignaturas: '',
      id_grado:'1',
      grado: 'Primer grado',
      titulo_material: 'Libro para el docente',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf',
    }
  ]

  ngOnInit(): void {
  }

  receiveMessage($event) {
    this.Ibusqueda = $event;
  }
}
