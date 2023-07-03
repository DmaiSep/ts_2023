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
      img: './RepositorioT/artes_visuales/img/arte_1.jpg',
      titulo_asignatura: 'Artes Visuales',
      url: './RepositorioT/artes_visuales/matriz_artes/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: './RepositorioT/artes_visuales/img/danza_1.jpg',
      titulo_asignatura: 'Danza',
      url: './RepositorioT/artes_visuales/matriz_danza/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: './RepositorioT/artes_visuales/img/musica_1.jpg',
      titulo_asignatura: 'Música',
      url: './RepositorioT/artes_visuales/matriz_musica/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: './RepositorioT/artes_visuales/img/teatro_1.jpg',
      titulo_asignatura: 'Teatro',
      url: './RepositorioT/artes_visuales/matriz_teatro/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'1',
      img: './RepositorioT/artes_visuales/img/aprendizajes2.jpg',
      titulo_asignatura: 'Seleccion especial',    
      url: './RepositorioT/artes_visuales/maestro/ARTES_TS_2018_v3_opt.pdf',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: './RepositorioT/artes_visuales/img/arte_2.jpg',
      titulo_asignatura: 'Artes Visuales',
      url: './RepositorioT/artes_visuales/matriz_artes2/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: './RepositorioT/artes_visuales/img/danza_2.jpg',
      titulo_asignatura: 'Danza',
      url: './RepositorioT/artes_visuales/matriz_danza2/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: './RepositorioT/artes_visuales/img/musica_2.jpg',
      titulo_asignatura: 'Música',
      url: './RepositorioT/artes_visuales/matriz_musica2/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'2',
      img: './RepositorioT/artes_visuales/img/teatro_2.jpg',
      titulo_asignatura: 'Teatro',
      url: './RepositorioT/artes_visuales/matriz_teatro2/index.html',
    },
    { 
      id_perfil:'1',
      id_grado:'2',
      img: './RepositorioT/artes_visuales/img/aprendizajes2.jpg',
      titulo_asignatura: 'Seleccion especial',    
      url: './RepositorioT/artes_visuales/maestro/ARTES_TS_2018_v3_opt.pdf',
    },  
    { 
      id_perfil:'1',
      id_grado:'3',
      img: './RepositorioT/artes_visuales/img/arte_3.jpg',
      titulo_asignatura: 'Artes Visuales',
      url: './RepositorioT/artes_visuales/matriz_artes3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: './RepositorioT/artes_visuales/img/danza_3.jpg',
      titulo_asignatura: 'Danza',
      url: './RepositorioT/artes_visuales/matriz_danza3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: './RepositorioT/artes_visuales/img/musica_3.jpg',
      titulo_asignatura: 'Música',
      url: './RepositorioT/artes_visuales/matriz_musica3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: './RepositorioT/artes_visuales/img/teatro_3.jpg',
      titulo_asignatura: 'Teatro',
      url: './RepositorioT/artes_visuales/matriz_teatro3/index.html',
    }, 
    { 
      id_perfil:'1',
      id_grado:'3',
      img: './RepositorioT/artes_visuales/img/aprendizajes2.jpg',
      titulo_asignatura: 'Seleccion especial',    
      url: './RepositorioT/artes_visuales/maestro/ARTES_TS_2018_v3_opt.pdf',
    }, 
  ]
  ngOnInit(): void {
   

  }
}
