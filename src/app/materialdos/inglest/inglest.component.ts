import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpClient } from "@angular/common/http";
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalvComponent } from '../modalv/modalv.component';


@Component({
  selector: 'app-inglest',
  templateUrl: './inglest.component.html',
  styleUrls: ['./inglest.component.scss']
})


export class InglestComponent {

  modalRef: MDBModalRef | null = null;

  constructor(private httpClient: HttpClient,  private modalService: MDBModalService) { }

  openModal( tit, dir ) {
    //console.log(tit, dir);
    this.modalRef = this.modalService.show(ModalvComponent, {
      data: { title: tit, url: 'https://www.youtube.com/embed/'+ dir },
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-lg modal-top modal-dialog-centered',
      containerClass: 'top',
      animated: true
    });
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
 
 // JSON Primero Grado
  ImagesG1: any = [
    {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/1.jpg',
      name: '1. Intercambio de opiniones sobre un servicio comunitario',
      alt: 'Intercambio_Opiniones',
      url: 'GFtUKMP9SGE',
    }, {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/2.jpg',
      name: '2.Compone diálogos e intervenciones para un cortometraje mudo',
      alt: 'dialogos_intervenciones',
      url: 'sghYO39js7k'
    }, {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/3.jpg',
      name: '3.Intercambia cumplidos, gustos y aversiones en una entrevista',
      alt: 'cumplidos_entrevista',
      url: 'N7GH6iz1q0s'
    }, {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/4.jpg',
      name: '4. Acuerda con otros un itinerario de viaje',
      alt: 'itinerario_viaje',
      url: 'BFSk3tRhqSk'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/5.jpg',
      name: '5. Lee cuentos clásicos',
      alt: 'cuentos_clásicos',
      url: 'A6dGDocJoEE'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/6.jpg',
      name: '6. Produce pronósticos constructivos acerca de otros',
      alt: 'pronósticos_constructivos',
      url: 'DcGDeUsrWN0'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/7.jpg',
      name: '7. Leer tiras cómicas para discutir expresiones culturales',
      alt: 'discutir_expresiones',
      url: 'UeyQuSqphxU'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/8.jpg',
      name: '8. Escribe instrucciones para usar un diccionario bilingüe',
      alt: 'diccionario_bilingüe',
      url: 'ndrwC8Wp6rw'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/9.jpg',
      name: '9. Redacta notas para elaborar esquemas de aparatos del cuerpo humano',
      alt: 'aparatos_cuerpo_humano',
      url: 'wEDWSOCyFVA'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G1/T1/A9/B0/10.jpg',
      name: '10. Expone información sobre la diversidad lingüística',
      alt: 'diversidad_lingüística',
      url: 'XtEQoG_kmnc'
    }  
  ]

   // JSON Segundo Grado
   ImagesG2: any = [
    {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/1.jpg',
      name: '1.Expresa apoyos y solidaridad ante un problema cotidiano',
      alt: 'apoyos_solidaridad',
      url: 'VAkYSOV0eKc',
    }, {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/2.jpg',
      name: '2.Compara la misma noticia en varias publicaciones periodísticas',
      alt: 'publicaciones_periodísticas',
      url: '02aMIWKisIw'
    }, {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/3.jpg',
      name: '3.Comenta experiencias propias y de otros en una conversación',
      alt: 'experiencias_propias',
      url: '2HUTbCAVsHE'
    }, {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/4.jpg',
      name: '4. Expresa quejas sobre un producto',
      alt: 'Expresa_quejas ',
      url: 'FZzhq4DjNV8'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/5.jpg',
      name: '5. Lee obras de teatro',
      alt: 'obras_teatro',
      url: 'FR_kpAIJSbA'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/6.jpg',
      name: '6. Improvisa un monólogo breve sobre un tema de interés',
      alt: 'monólogo',
      url: '7_fnjstlatY'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/7.jpg',
      name: '7. Lee ensayos literarios breves para contrastar aspectos culturales',
      alt: 'ensayos_literarios',
      url: '89L1TJd030g'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/8.jpg',
      name: '8.Produce instrucciones para prepararse ante una situación de riesgo derivada de un fenómeno natural',
      alt: 'fenómeno_natural',
      url: 'iSnzhQwmYqQ'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/9.jpg',
      name: '9. Parafrasea información para explicar el funcionamiento de una máquina',
      alt: 'Parafrasea_información',
      url: 'cSQFSVHISY4'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G2/T1/A9/B0/10.jpg',
      name: '10. Discute puntos de vista para participar en una mesa redonda',
      alt: ' puntos_vista',
      url: '-8YSOx0LBwE'
    }  
  ]

   // JSON Tercer Grado
   ImagesG3: any = [
    {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/1.jpg',
      name: '1. Conversa sobre hábitos culturales de distintos países',
      alt: 'hábitos_culturales',
      url: 's0CFv86eeIQ',
    }, {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/2.jpg',
      name: '2.Intercambia emociones y reacciones provocadas por un programa de televisión',
      alt: 'emociones_reacciones',
      url: 'OfhhVppkF78'
    }, {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/3.jpg',
      name: '3. Interpreta y ofrece descripciones de situaciones inesperadas en una conversación.',
      alt: 'situaciones_inesperadas',
      url: 'YjxuXs53D4o'
    }, {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/4.jpg',
      name: '4. Discute acciones concretas para atender derechos de los jóvenes',
      alt: 'atender_derechos',
      url: 'FPUX1hs9KlI'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/5.jpg',
      name: '5. Lee poemas',
      alt: 'poemas',
      url: 'cOKXhmL4W-w'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/6.jpg',
      name: '6. Adivina y formula hipótesis sobre sucesos pasados',
      alt: 'sucesos_pasados',
      url: 'S9dmCWmfcKA'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/7.jpg',
      name: '7. Lee literatura fantástica o de suspenso para evaluar diferencias culturales',
      alt: 'literatura_fantástica',
      url: 'wVWT_rneotA'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/8.jpg',
      name: '8. Interpreta y escribe instrucciones para hacer un experimento sencillo',
      alt: 'experimento_sencillo',
      url: 'rokLP-ABRlo'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/9.jpg',
      name: '9. Escribe un informe breve sobre un acontecimiento histórico',
      alt: 'acontecimiento_histórico',
      url: 'xSD8yTolZSQ'
    }  
    , {
      src: './RepositorioT/audiovisuales/img/G3/T1/A9/B0/10.jpg',
      name: '10. Escribe acuerdos o desacuerdos para intervenir en un debate sobre una de las bellas artes',
      alt: 'acuerdos_desacuerdos',
      url: 'VYViS-1LnR4'
    }  
  ]
  ngOnInit(): void {
   

  }
}
