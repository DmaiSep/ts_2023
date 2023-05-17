import { Component } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ModaldiComponent } from '../modaldi/modaldi.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(ModaldiComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-dialog modal-lg modal-top modal-notify  modal-success modal-dialog-scrollable ldim',
        containerClass: '',
        animated: true
    });
  }

}
