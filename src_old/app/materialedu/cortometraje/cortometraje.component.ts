import { Component } from '@angular/core';
import { CortometrajesService } from '../services/cortometrajes.service';

@Component({
  selector: 'app-cortometraje',
  templateUrl: './cortometraje.component.html',
  styleUrls: ['./cortometraje.component.scss']
})
export class CortometrajeComponent {
  Ibusqueda: string;
  Cortometraje: any = [];

  constructor(private cortometraje:CortometrajesService) { }
  
  receiveMessage($event) {
    this.Ibusqueda = $event;
  }

  ngOnInit(): void {

    this.cortometraje.getCortometraje().subscribe(res =>{
      this.Cortometraje = res;
      console.log(this.Cortometraje);
    },err =>{
      console.log(err);
    });
  }
}
