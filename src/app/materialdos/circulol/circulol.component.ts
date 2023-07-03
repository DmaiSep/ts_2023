import { Component } from '@angular/core';

@Component({
  selector: 'app-circulol',
  templateUrl: './circulol.component.html',
  styleUrls: ['./circulol.component.scss']
})
export class CirculolComponent {
  C_Lectura: any = [
    {
      src: './RepositorioT/M_CIRCULO/IMG/1.png',
      titulo: 'Círculos de lectura',
      grado: 'Grado: 1°',
      ver: './RepositorioT/M_CIRCULO/1/index.html',
      descarga: './RepositorioT/M_CIRCULO/PDF/MATRIZ_CIRCULO_LECTURA_1.zip'
    },

    {
      src: './RepositorioT/M_CIRCULO/IMG/2.png',
      titulo: 'Círculos de lectura',
      grado: 'Grado: 2°',
      ver: './RepositorioT/M_CIRCULO/2/index.html',
      descarga: './RepositorioT/M_CIRCULO/PDF/MATRIZ_CIRCULO_LECTURA_2.zip'
    },

    {
      src: './RepositorioT/M_CIRCULO/IMG/3.png',
      titulo: 'Círculos de lectura',
      grado: 'Grado: 3°',
      ver: './RepositorioT/M_CIRCULO/3/index.html',
      descarga: './RepositorioT/M_CIRCULO/PDF/MATRIZ_CIRCULO_LECTURA_3.zip'
    },

    {
      src: './RepositorioT/M_CIRCULO/IMG/tabla5.png',
      titulo: 'Distribución y finalidad de las actividades recurrentes',
      grado: '',
      ver: './RepositorioT/M_CIRCULO/TABLA5/index.html',
      descarga: './RepositorioT/M_CIRCULO/PDF/Tabla5.zip'
    }

  ]
}
