import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LibrosService } from '../services/libros.service';
import { VisitaService } from '../services/visita.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit{
  form: FormGroup;
  gradosSelect:number = 0;
  asigSelect:number = 0;
  menu: any = [];
  libros: any = [];
  
  constructor( private _formBuilder: FormBuilder, private _libros:LibrosService, private _visitas:VisitaService) {
    this.form = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
      asignatura  : ['', [ Validators.required]  ],
    });
  }
  
  ngOnInit(): void {
    //desabilita el input de asignatura al iniciar el componente
    this.form.controls['asignatura'].disable();

    this._libros.getMenu().subscribe(res =>{
      this.menu = res;
    },err =>{
      console.log(err);
    });

    this._libros.getLibros().subscribe(res =>{
      this.libros = res;
      //console.log(this.libros);
    },err =>{
      console.log(err);
    });
  }

  config: SwiperOptions = {
    slidesPerView: 4,
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
        slidesPerGroup: 2,
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

  grado(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('grado').value){
      this.gradosSelect = this.form.get('grado').value;
      if(this.form.get('grado').value != 999){
        this.form.controls['asignatura'].enable();
      }else{
        this.form.controls['asignatura'].disable();
      }
    }
   
  }

  asignaturas(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('asignatura').value){
      this.asigSelect = this.form.get('asignatura').value;
    }

  }

  visita(id_material, id_tipo_material, accion){
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this._visitas.postvisitas(id_material, id_tipo_material, accion, timeZone).subscribe( res =>{
      console.log(res[0].message);
    },err =>{
      console.log(err);
    });
  }
}
