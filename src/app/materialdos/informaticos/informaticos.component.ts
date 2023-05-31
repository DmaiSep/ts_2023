import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { InformaticosService } from '../services/informaticos.service';
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
  menu: any = [];
  Informaticos: any = [];

  constructor(private _formBuilder: FormBuilder, private _informaticos:InformaticosService) { 
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

  bloque = [
    { id_bloque: '1', bloque: '1' },
    { id_bloque: '2', bloque: '2' },
    { id_bloque: '3', bloque: '3' },
    { id_bloque: '999', bloque: 'Todos' }
  ];

  ngOnInit(): void {
    this._informaticos.getMenu().subscribe(res =>{
      this.menu = res;
    },err =>{
      console.log(err);
    });

    this._informaticos.getInformaticos().subscribe(res =>{
      this.Informaticos = res;
      //console.log(this.Informaticos);
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

  visita(id_material, id_tipo_material, accion){
    console.log(id_material, id_tipo_material, accion);
  }
}
