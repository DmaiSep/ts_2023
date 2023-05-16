import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-informaticos',
  templateUrl: './informaticos.component.html',
  styleUrls: ['./informaticos.component.scss']
})
export class InformaticosComponent {
  form: FormGroup;
  gradosSelect:number = 0;
  asigSelect:number = 0;
  bloqueSelect:number = 0;

  constructor(private _formBuilder: FormBuilder) { 
    this.form = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
      asignatura  : ['', [ Validators.required]  ],
      bloque  : ['', [ Validators.required]  ],
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

  menu = [
    { 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asignatura: '1',
      asignatura: 'Español',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asignatura: '2',
      asignatura: 'Matematicas',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asignatura: '3',
      asignatura: 'Fisica',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asignatura: '4',
      asignatura: 'Historia',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asignatura: '5',
      asignatura: 'Formación Civica y Etica',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asignatura: '1',
      asignatura: 'Español',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asignatura: '2',
      asignatura: 'Matematicas',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asignatura: '3',
      asignatura: 'Química',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asignatura: '4',
      asignatura: 'Historia',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asignatura: '5',
      asignatura: 'Formación Civica y Etica',
    }
  ];

  bloque = [
    { id_bloque: '1', bloque: '1' },
    { id_bloque: '2', bloque: '2' },
    { id_bloque: '3', bloque: '3' },
    { id_bloque: '999', bloque: 'Todos' }
  ];
  
  Informaticos = [
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '1',id_asignatura:'1', asignatura: 'Español',id_informatico: '1', titulo_informatico: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'2', asignatura: 'Matematicas',id_informatico: '2', titulo_informatico: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '3',id_asignatura:'3', asignatura: 'Química',id_informatico: '3', titulo_informatico: 'Fisica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '1',id_asignatura:'4', asignatura: 'Historia',id_informatico: '4', titulo_informatico: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_informatico: '5', titulo_informatico: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '3',id_asignatura:'1', asignatura: 'Español',id_informatico: '6', titulo_informatico: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'2', asignatura: 'Matematicas',id_informatico: '7', titulo_informatico: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '2',id_asignatura:'3', asignatura: 'Química',id_informatico: '8', titulo_informatico: 'Química', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '3',id_asignatura:'4', asignatura: 'Historia',id_informatico: '9', titulo_informatico: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_informatico: '10', titulo_informatico: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'1', asignatura: 'Español',id_informatico: '1', titulo_informatico: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '3',id_asignatura:'2', asignatura: 'Matematicas',id_informatico: '2', titulo_informatico: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '1',id_asignatura:'3', asignatura: 'Química',id_informatico: '3', titulo_informatico: 'Fisica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'4', asignatura: 'Historia',id_informatico: '4', titulo_informatico: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '3',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_informatico: '5', titulo_informatico: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'1', asignatura: 'Español',id_informatico: '6', titulo_informatico: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '2',id_asignatura:'2', asignatura: 'Matematicas',id_informatico: '7', titulo_informatico: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '3',id_asignatura:'3', asignatura: 'Química',id_informatico: '8', titulo_informatico: 'Química', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'4', asignatura: 'Historia',id_informatico: '9', titulo_informatico: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '2',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_informatico: '10', titulo_informatico: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' }
  ]

  Images: any = [
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

  ngOnInit(): void {
   

  }

  grado(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('grado').value){
      this.gradosSelect = this.form.get('grado').value;
      if(this.form.get('grado').value != 999){
        this.form.controls['asignatura'].enable();
      }else{
        this.form.controls['asignatura'].disable();
        this.form.controls['bloque'].disable();
      }
    }
   
  }

  asignaturaf(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('asignatura').value){
      this.asigSelect = this.form.get('asignatura').value;
      if(this.form.get('asignatura').value != 999){
        this.form.controls['bloque'].enable();
      }else{
        this.form.controls['bloque'].disable();
      }
    }

  }

  bloquef(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('bloque').value){
      this.bloqueSelect = this.form.get('bloque').value;
    }
    

  }
}
