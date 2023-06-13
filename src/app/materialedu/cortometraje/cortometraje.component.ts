import { Component } from '@angular/core';

@Component({
  selector: 'app-cortometraje',
  templateUrl: './cortometraje.component.html',
  styleUrls: ['./cortometraje.component.scss']
})
export class CortometrajeComponent {
  Ibusqueda: string;
  
  receiveMessage($event) {
    this.Ibusqueda = $event;
  }
}
