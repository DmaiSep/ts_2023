import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ApuntesService } from '../services/apuntes.service';

@Component({
  selector: 'app-apuntes',
  templateUrl: './apuntes.component.html',
  styleUrls: ['./apuntes.component.scss']
})
export class ApuntesComponent {
  form: FormGroup;
  gradosSelect:number = 0;
  menu: any = [];
  Apuntes: any = [];

  constructor(private _formBuilder: FormBuilder, private _apuntes:ApuntesService) {
    this.form = this._formBuilder.group({
      grado  : ['', [ Validators.required]  ],
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


  ngOnInit(): void {
    this._apuntes.getMenu().subscribe(res =>{
      this.menu = res;
    },err =>{
      console.log(err);
    });

    this._apuntes.getApuntes().subscribe(res =>{
      this.Apuntes = res;
      //console.log(this.Apuntes);
    },err =>{
      console.log(err);
    });
  }

  grado(){
    //verifica si hay algun valor seleccionado
    if(this.form.get('grado').value){
      this.gradosSelect = this.form.get('grado').value;
    }
   
  }

}
