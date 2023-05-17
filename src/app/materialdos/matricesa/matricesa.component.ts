import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-matricesa',
  templateUrl: './matricesa.component.html',
  styleUrls: ['./matricesa.component.scss']
})
export class MatricesaComponent {
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
 
  Avisuales: any = [
    { 
      id_perfil:'1',
      id_grado:'1',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_artes_visuales_2018.png',
      titulo_asignatura: 'Artes Visuales',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_artes/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_danza_2018.png',
      titulo_asignatura: 'Danza',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_danza/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_musica_2018.png',
      titulo_asignatura: 'Música',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_musica/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_teatro_2018.png',
      titulo_asignatura: 'Teatro',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_teatro/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/PORT_artes_PDF_2018.png',
      titulo_asignatura: 'Seleccion especial',    
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Maestro/pdf/ARTES_TS_2018_v3_opt.pdf',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_artes_visuales_2018.png',
      titulo_asignatura: 'Artes Visuales',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_artes2/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_danza_2018.png',
      titulo_asignatura: 'Danza',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_danza2/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_musica_2018.png',
      titulo_asignatura: 'Música',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_musica2/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_teatro_2018.png',
      titulo_asignatura: 'Teatro',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_teatro2/index.html',
    },
    { 
      id_perfil:'1',
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/PORT_artes_PDF_2018.png',
      titulo_asignatura: 'Seleccion especial',    
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Maestro/pdf/ARTES_TS_2018_v3_opt.pdf',
    },  
    { 
      id_perfil:'1',
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_artes_visuales_2018.png',
      titulo_asignatura: 'Artes Visuales',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_artes3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_danza_2018.png',
      titulo_asignatura: 'Danza',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_danza3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_musica_2018.png',
      titulo_asignatura: 'Música',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_musica3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/ICONS_teatro_2018.png',
      titulo_asignatura: 'Teatro',
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Sitio/matriz_teatro3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/images/Docente/ilustraciones_colores/PORT_artes_PDF_2018.png',
      titulo_asignatura: 'Seleccion especial',    
      url: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Maestro/pdf/ARTES_TS_2018_v3_opt.pdf',
    }, 
  ]
  ngOnInit(): void {
   

  }
}
