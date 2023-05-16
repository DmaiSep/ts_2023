import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalvComponent } from '../modalv/modalv.component'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.scss']
})
export class AudiovisualesComponent {
  modalRef: MDBModalRef | null = null;
  form: FormGroup;
  gradosSelect:number = 0;
  asigSelect:number = 0;
  bloqueSelect:number = 0;


  constructor( private modalService: MDBModalService, private _formBuilder: FormBuilder) { 
    this.form = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
      asignatura  : ['', [ Validators.required]  ],
      bloque  : ['', [ Validators.required]  ],
    });
  }
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

  Audiovisuales = [
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '1',id_asignatura:'1', asignatura: 'Español',id_audiovisual: '1', titulo_audiovisual: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'2', asignatura: 'Matematicas',id_audiovisual: '2', titulo_audiovisual: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '3',id_asignatura:'3', asignatura: 'Química',id_audiovisual: '3', titulo_audiovisual: 'Fisica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '1',id_asignatura:'4', asignatura: 'Historia',id_audiovisual: '4', titulo_audiovisual: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_audiovisual: '5', titulo_audiovisual: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '3',id_asignatura:'1', asignatura: 'Español',id_audiovisual: '6', titulo_audiovisual: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'2', asignatura: 'Matematicas',id_audiovisual: '7', titulo_audiovisual: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '2',id_asignatura:'3', asignatura: 'Química',id_audiovisual: '8', titulo_audiovisual: 'Química', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '3',id_asignatura:'4', asignatura: 'Historia',id_audiovisual: '9', titulo_audiovisual: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '1', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_audiovisual: '10', titulo_audiovisual: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/7.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'1', asignatura: 'Español',id_audiovisual: '1', titulo_audiovisual: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '3',id_asignatura:'2', asignatura: 'Matematicas',id_audiovisual: '2', titulo_audiovisual: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '1',id_asignatura:'3', asignatura: 'Química',id_audiovisual: '3', titulo_audiovisual: 'Fisica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '2',id_asignatura:'4', asignatura: 'Historia',id_audiovisual: '4', titulo_audiovisual: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '2',grado: 'Segundo Grado', bloque: '3',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_audiovisual: '5', titulo_audiovisual: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/2/ingles/6.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'1', asignatura: 'Español',id_audiovisual: '6', titulo_audiovisual: 'Español. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime', secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '2',id_asignatura:'2', asignatura: 'Matematicas',id_audiovisual: '7', titulo_audiovisual: 'Matematicas. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '3',id_asignatura:'3', asignatura: 'Química',id_audiovisual: '8', titulo_audiovisual: 'Química', secuencia:'Secuencia 12. Probabilidad clásica 1', img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '1',id_asignatura:'4', asignatura: 'Historia',id_audiovisual: '9', titulo_audiovisual: 'Historia. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' },
    { id_perfil: '2', id_grado: '3',grado: 'Tercer Grado', bloque: '2',id_asignatura:'5', asignatura: 'Formación Civica y Etica',id_audiovisual: '10', titulo_audiovisual: 'Formación Civica y Etica. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',secuencia:'Secuencia 12. Probabilidad clásica 1',  img: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', url:'HlO0gY836rk' }
  ]
 
 
  ngOnInit(): void {
    this.form.controls['asignatura'].disable();
    this.form.controls['bloque'].disable();
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
