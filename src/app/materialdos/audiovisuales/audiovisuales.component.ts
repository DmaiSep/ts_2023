import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HttpClient } from "@angular/common/http";
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalvComponent } from '../modalv/modalv.component'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.scss']
})
export class AudiovisualesComponent {
  modalRef: MDBModalRef | null = null;
  formA: FormGroup;
  gradosSelect:number = 0;
  asignaturaSelect:number = 0;

  constructor(private httpClient: HttpClient, private modalService: MDBModalService, private _formBuilder: FormBuilder) { }
  openModal() {
    this.modalRef = this.modalService.show(ModalvComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-lg modal-top modal-dialog-centered',
      containerClass: 'top',
      animated: true
    });

    this.formA = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
      asignaturanatura  : ['', [ Validators.required]  ],
    });
  }
 
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: false,
    breakpoints: {
      1368: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1023: {
        slidesPerView: 2,
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


  menuA = [
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
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  libros = [
    { perfil: '1', id_grado: '2', id_asignatura:'1', id_audiovisual: '1', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '2', id_asignatura:'2', id_audiovisual: '2', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '2', id_asignatura:'3', id_audiovisual: '3', titulo: 'Fisica', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '2', id_asignatura:'4', id_audiovisual: '4', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '2', id_asignatura:'5', id_audiovisual: '5', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '3', id_asignatura:'1', id_audiovisual: '6', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '3', id_asignatura:'2', id_audiovisual: '7', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '3', id_asignatura:'3', id_audiovisual: '8', titulo: 'Química', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '3', id_asignatura:'4', id_audiovisual: '9', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { perfil: '1', id_grado: '3', id_asignatura:'5', id_audiovisual: '10', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '2', id_asignatura:'1', id_audiovisual: '1', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '2', id_asignatura:'2', id_audiovisual: '2', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '2', id_asignatura:'3', id_audiovisual: '3', titulo: 'Fisica', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '2', id_asignatura:'4', id_audiovisual: '4', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '2', id_asignatura:'5', id_audiovisual: '5', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '3', id_asignatura:'1', id_audiovisual: '6', titulo: 'Español', ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '3', id_asignatura:'2', id_audiovisual: '7', titulo: 'Matematicas',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '3', id_asignatura:'3', id_audiovisual: '8', titulo: 'Química', ver:'', desc:'',img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '3', id_asignatura:'4', id_audiovisual: '9', titulo: 'Historia',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { perfil: '2', id_grado: '3', id_asignatura:'5', id_audiovisual: '10', titulo: 'Formación Civica y Etica',ver:'', desc:'', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' }
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
    console.log(this.formA.get('grado').value);
    if(this.formA.get('grado').value){
      this.gradosSelect = this.formA.get('grado').value;
      this.formA.controls['asignaturanatura'].enable();
    }
   
  }

  asignaturaf(){
    //verifica si hay algun valor seleccionado
    if(this.formA.get('asignaturanatura').value){
      this.asignaturaSelect = this.formA.get('asignaturanatura').value;
    }

  }

}
