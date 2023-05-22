import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModalvComponent } from '../modalv/modalv.component'
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AudiovisualesService } from '../services/audiovisuales.service';
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
  menu: any = [];
  Audiovisuales: any = [];


  constructor( private modalService: MDBModalService, private _formBuilder: FormBuilder, private _audiovisuales:AudiovisualesService) { 
    this.form = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
      asignatura  : ['', [ Validators.required]  ],
      bloque  : ['', [ Validators.required]  ],
    });
  }
  
  openModal( tit, dir ) {
    //console.log(tit, dir);
    this.modalRef = this.modalService.show(ModalvComponent, {
      data: { title: tit, url: 'https://www.youtube.com/embed/'+dir },
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

  bloque = [
    { id_bloque: '1', bloque: '1' },
    { id_bloque: '2', bloque: '2' },
    { id_bloque: '3', bloque: '3' },
    { id_bloque: '999', bloque: 'Todos' }
  ];
 
  ngOnInit(): void {
    this.form.controls['asignatura'].disable();
    this.form.controls['bloque'].disable();

    this._audiovisuales.getMenu().subscribe(res =>{
      this.menu = res;
      //console.log(this.menu);
    },err =>{
      console.log(err);
    });

    this._audiovisuales.getAudiovisuales().subscribe(res =>{
      this.Audiovisuales = res;
      //console.log(this.Audiovisuales);
    },err =>{
      console.log(err);
    });

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
