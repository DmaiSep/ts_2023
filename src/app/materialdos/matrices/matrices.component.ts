import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss']
})
export class MatricesComponent {

  constructor(private httpClient: HttpClient) { }
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
 
 
  Images: any = [
    {
      src: './RepositorioT/matrices/imagenes/tamaulipas/ESPANOL.png',
      name: 'Español',
      url: './RepositorioT/matrices/libros/tamaulipas/ESPANOL-TAMAULIPAS-1.pdf',
      zip: './RepositorioT/matrices/zip/tamaulipas/ESPANOL-TAMAULIPAS-1.pdf.zip',
    }, {
      src: './RepositorioT/matrices/imagenes/tamaulipas/MATEMATICAS.png',
      name: 'Matemáticas',
      url: './RepositorioT/matrices/libros/tamaulipas/MATEMATICAS-TAMAULIPAS-1.pdf',
      zip: './RepositorioT/matrices/zip/tamaulipas/MATEMATICAS-TAMAULIPAS.pdf.zip',
    }, {
      src: './RepositorioT/matrices/imagenes/tamaulipas/QUIMICA.png',
      name: 'Química',
      url: './RepositorioT/matrices/libros/tamaulipas/QUIMICA-TAMAULIPAS-1.pdf',
      zip: './RepositorioT/matrices/zip/tamaulipas/QUIMICA-TAMAULIPAS.pdf.zip',
    }, {
      src: './RepositorioT/matrices/imagenes/tamaulipas/HISTORIA.png',
      name: 'Historia',
      url: './RepositorioT/matrices/libros/tamaulipas/HISTORIA-TAMAULIPAS-1.pdf',
      zip: './RepositorioT/matrices/zip/tamaulipas/HISTORIA-TAMAULIPAS.pdf.zip',
    } , {
      src: './RepositorioT/matrices/imagenes/tamaulipas/FORMACION.png',
      name: 'Formación Cívica y Ética',
      url: './RepositorioT/matrices/libros/tamaulipas/FORMACION-TAMAULIPAS-1.pdf',
      zip: './RepositorioT/matrices/zip/tamaulipas/FORMACION-TAMAULIPAS.pdf.zip',
    }   
  ]

  vinculacion: any = [
    {
      src: './RepositorioT/matrices/imagenes/3/Ciencias/portada_ciencias_3.png',
      name: 'Ciencias III (Énfasis en Química) Bloque II',
      url: './RepositorioT/matrices/libros/3/Ciencias/ciencias_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Ciencias/ciencias_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Ciencias/quimica.png',
      name: 'Ciencias III (Énfasis en Química) Bloque III',
      url: './RepositorioT/matrices/libros/3/Ciencias/quimica.pdf',
      zip: './RepositorioT/matrices/zip/3/Ciencias/quimica.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Edu_fis/portada_edufis_3.png',
      name: 'Educación Física III Bloque II',
      url: './RepositorioT/matrices/libros/3/Edu_fis/edufis_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Edu_fis/edufis_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Edu_fis/educacionfisica.png',
      name: 'Educación Física III Bloque III',
      url: './RepositorioT/matrices/libros/3/Edu_fis/educacion_fisica_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Edu_fis/educacion_fisica_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Espanol/portada_espanol_3.png',
      name: 'Español III Bloque II',
      url: './RepositorioT/matrices/libros/3/Espanol/espanol_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Espanol/espanol_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Espanol/espanol.png',
      name: 'Español III Bloque III',
      url: './RepositorioT/matrices/libros/3/Espanol/espanol3.pdf',
      zip: './RepositorioT/matrices/zip/3/Espanol/espanol3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/FCyE/portada_fcce_2_3.png',
      name: 'Formación Cívica y Ética II Bloque II',
      url: './RepositorioT/matrices/libros/3/FCyE/fce_2_3.pdf',
      zip: './RepositorioT/matrices/zip/3/FCyE/fce_2_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/FCyE/formacion.png',
      name: 'Formación Cívica y Ética Bloque III',
      url: './RepositorioT/matrices/libros/3/FCyE/formacion3.pdf',
      zip: './RepositorioT/matrices/zip/3/FCyE/formacion3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Historia/portada_historia-II_3.png',
      name: 'Historia II Bloque II',
      url: './RepositorioT/matrices/libros/3/Historia/historia_2_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Historia/historia_2_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Historia/historia.png',
      name: 'Historia II Bloque III',
      url: './RepositorioT/matrices/libros/3/Historia/historia3.pdf',
      zip: './RepositorioT/matrices/zip/3/Historia/historia3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Ingles/portada_ingles3.png',
      name: 'Inglés III Bloque II',
      url: './RepositorioT/matrices/libros/3/Ingles/ingles_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Ingles/ingles_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Ingles/ingles.png',
      name: 'Inglés III Bloque III',
      url: './RepositorioT/matrices/libros/3/Ingles/ingles3.pdf',
      zip: './RepositorioT/matrices/zip/3/Ingles/ingles3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Matematicas/portadas_mate-3.png',
      name: 'Matemáticas III Bloque II',
      url: './RepositorioT/matrices/libros/3/Matematicas/matematicas_3.pdf',
      zip: './RepositorioT/matrices/zip/3/Matematicas/matematicas_3.zip',
    },
    {
      src: './RepositorioT/matrices/imagenes/3/Matematicas/matematicas.png',
      name: 'Matemáticas III Bloque III',
      url: './RepositorioT/matrices/libros/3/Matematicas/matematicas3.pdf',
      zip: './RepositorioT/matrices/zip/3/Matematicas/matematicas3.zip',
    }
  ]
  ngOnInit(): void {
   

  }



}
