import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-modalv',
  templateUrl: './modalv.component.html',
  styleUrls: ['./modalv.component.scss']
})
export class ModalvComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
