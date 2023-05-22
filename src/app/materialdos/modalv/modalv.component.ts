import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-modalv',
  templateUrl: './modalv.component.html',
  styleUrls: ['./modalv.component.scss']
})
export class ModalvComponent implements OnInit {
  title: string | null = null;
  url: string | null = null;
  
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
    console.log(this.url);
  }

}
