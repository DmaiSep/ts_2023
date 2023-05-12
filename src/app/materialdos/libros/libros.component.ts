import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit{
  form: FormGroup;
  gradosUnicos = [];
  asigMenu = [];
  libroSelect = [];
  gradosSelect:number = 0;
  asigSelect:number = 0;
  
  constructor(private httpClient: HttpClient, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
      asignatura  : ['', [ Validators.required]  ],
    });
  }
  
  ngOnInit(): void {
    //desabilita el input de asignatura al iniciar el componente
    this.form.controls['asignatura'].disable();
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
  
  //array de grados y asignaturas, importante debe tener id_grado, id_asig para que funcione el filtrado
  menu = [
    { 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asig: '1',
      asig: 'Español',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asig: '2',
      asig: 'Matematicas',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asig: '3',
      asig: 'Fisica',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asig: '4',
      asig: 'Historia',
    },{ 
      id_grado: '2', 
      grado: 'Segundo Grado',
      id_asig: '5',
      asig: 'Formación Civica y Etica',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asig: '1',
      asig: 'Español',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asig: '2',
      asig: 'Matematicas',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asig: '3',
      asig: 'Química',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asig: '4',
      asig: 'Historia',
    },{ 
      id_grado: '3', 
      grado: 'Tercer Grado',
      id_asig: '5',
      asig: 'Formación Civica y Etica',
    }
  ];
  
  //array de los materiales, importante debe de tener perfil,_id_grado, id_asig, para que funcione el filtrado
  libros = [
    { perfil: '1', id_grado: '2', id_asig:'1', id_libro: '1', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png' },
    { perfil: '1', id_grado: '2', id_asig:'2', id_libro: '2', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png' },
    { perfil: '1', id_grado: '2', id_asig:'3', id_libro: '3', titulo: 'Fisica', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png' },
    { perfil: '1', id_grado: '2', id_asig:'4', id_libro: '4', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png' },
    { perfil: '1', id_grado: '2', id_asig:'5', id_libro: '5', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png' },
    { perfil: '1', id_grado: '3', id_asig:'1', id_libro: '6', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png' },
    { perfil: '1', id_grado: '3', id_asig:'2', id_libro: '7', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png' },
    { perfil: '1', id_grado: '3', id_asig:'3', id_libro: '8', titulo: 'Química', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png' },
    { perfil: '1', id_grado: '3', id_asig:'4', id_libro: '9', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png' },
    { perfil: '1', id_grado: '3', id_asig:'5', id_libro: '10', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png' },
    { perfil: '2', id_grado: '2', id_asig:'1', id_libro: '1', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png' },
    { perfil: '2', id_grado: '2', id_asig:'2', id_libro: '2', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png' },
    { perfil: '2', id_grado: '2', id_asig:'3', id_libro: '3', titulo: 'Fisica', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png' },
    { perfil: '2', id_grado: '2', id_asig:'4', id_libro: '4', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png' },
    { perfil: '2', id_grado: '2', id_asig:'5', id_libro: '5', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png' },
    { perfil: '2', id_grado: '3', id_asig:'1', id_libro: '6', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png' },
    { perfil: '2', id_grado: '3', id_asig:'2', id_libro: '7', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png' },
    { perfil: '2', id_grado: '3', id_asig:'3', id_libro: '8', titulo: 'Química', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png' },
    { perfil: '2', id_grado: '3', id_asig:'4', id_libro: '9', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png' },
    { perfil: '2', id_grado: '3', id_asig:'5', id_libro: '10', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png' }
  ];

  grado(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('grado').value){
      this.gradosSelect = this.form.get('grado').value;
      this.form.controls['asignatura'].enable();
    }
   
  }

  asignaturaf(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('asignatura').value){
      this.asigSelect = this.form.get('asignatura').value;
    }

  }

}
