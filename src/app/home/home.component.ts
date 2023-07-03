import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModaldiComponent } from '../modaldi/modaldi.component';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalRef: MDBModalRef;
  Carousel: any = [];

  constructor(private modalService: MDBModalService, private _carousel:CarouselService) { }

  openModal(id_grado, id_perfil) {
    this.modalRef = this.modalService.show(ModaldiComponent, {
        data:{grado:id_grado, perfil:id_perfil},
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-dialog modal-lg modal-top modal-notify  modal-dialog-scrollable ldim',
        containerClass: '',
        animated: true
    });
  }
  ngOnInit(): void {

    this._carousel.getCarousel().subscribe(res =>{
      this.Carousel = res;
      //console.log(this.Carousel);
    },err =>{
      console.log(err);
    });
  }

}
