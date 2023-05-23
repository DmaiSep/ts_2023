import { Component } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-modaldi',
  templateUrl: './modaldi.component.html',
  styleUrls: ['./modaldi.component.scss']
})
export class ModaldiComponent {
  constructor(public modalRef: MDBModalRef) { }
  grado: string | null = null;
  perfil: string | null = null;
  gradoSel: any  | null = null;
  perfilSel: any | null = null;

  Images: Array<object> = [
    {
      src: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_1.png',
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

  grados:any []=[
    {g:'Primer grado', id_g:1},
    {g:'Segundo grado', id_g:2},
    {g:'Tercer grado', id_g:3}
  ]

  perfiles:any[]=[
    {p:'Maestro', id_p:1},
    {p:'Alumno', id_p:2}
  ]

  ldi: any[] = [
    {
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Biología',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Biología',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Biología',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Geografía',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Geografía',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Geografía',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Física',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Física',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Física',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'2',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Química',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Química',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Ciencias y Tecnología. Química',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'1',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'2',
      id_perfil:'2'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'3',
      id_bloque:'3',
      id_perfil:'2'
    },{
      asignatura:'Lengua Materna. Español',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'0',
      id_perfil:'1'
    },{
      asignatura:'Matemáticas',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'0',
      id_perfil:'1'
    },{
      asignatura:'Ciencias y Tecnología. Biología',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'0',
      id_perfil:'1'
    },{
      asignatura:'Geografía',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'0',
      id_perfil:'1'
    },{
      asignatura:'Historia',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'0',
      id_perfil:'1'
    },{
      asignatura:'Formación Cívica y Ética',
      img:'./Repositorio/LDI_TS/img/',
      url:'./Repositorio/LDI_TS/',
      id_grado:'1',
      id_bloque:'0',
      id_perfil:'1'
    },
  ] 

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
        slidesPerView: 1,
        slidesPerGroup: 1,
        
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  };  
  ngOnInit(): void {
    this.gradoSel = this.grados.filter(dat => Number(dat.id_g) == Number(this.grado));
    this.perfilSel = this.perfiles.filter(dat => Number(dat.id_p) == Number(this.perfil));
    //console.log(this.gradoSel, this.perfilSel)
    
  }

}
