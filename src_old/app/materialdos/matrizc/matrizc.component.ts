import { Component } from '@angular/core';

@Component({
  selector: 'app-matrizc',
  templateUrl: './matrizc.component.html',
  styleUrls: ['./matrizc.component.scss']
})
export class MatrizcComponent {
  constructor(){}
  Matriz: any = [
    { 
      id_grado:'1',
      img: './RepositorioT/M_AFI/img/Espanol-PrimerGrado.png',
      titulo_matriz: 'Lengua Materna. Español',
      afi: 'https://conaliteg.sep.gob.mx/sep/CLMES1S_PP.htm',
      matriz: './RepositorioT/M_AFI/Espanol_1/',
      descarga: './RepositorioT/M_AFI/PDF/MC_LME_1.pdf'
    }, {
      id_grado:'1',
      img: './RepositorioT/M_AFI/img/Matematicas-primerGrado.png',
      titulo_matriz: 'Matematicas',
      afi: 'https://conaliteg.sep.gob.mx/sep/CMAT1S_PP.htm',
      matriz: './RepositorioT/M_AFI/Matematicas_1/',
      descarga: './RepositorioT/M_AFI/PDF/MC_MATE_1.pdf'
    }, { 
      id_grado:'2',
      img: './RepositorioT/M_AFI/img/Espanol-SegundoGrado.png',
      titulo_matriz: 'Lengua Materna. Español',
      afi: 'https://conaliteg.sep.gob.mx/sep/CLMES2S_PP.htm',
      matriz: './RepositorioT/M_AFI/Espanol_2/',
      descarga: './RepositorioT/M_AFI/PDF/MC_LME_2.pdf'
    }, {
      id_grado:'2',
      img: './RepositorioT/M_AFI/img/Matematicas-SegundoGrado.png',
      titulo_matriz: 'Matematicas',
      afi: 'https://conaliteg.sep.gob.mx/sep/CMAT2S_PP.htm',
      matriz: './RepositorioT/M_AFI/Matematicas_2/',
      descarga: './RepositorioT/M_AFI/PDF/MC_MATE_2.pdf'
    }, { 
      id_grado:'3',
      img: './RepositorioT/M_AFI/img/Espanol-TercerGrado.png',
      titulo_matriz: 'Lengua Materna. Español',
      afi: 'https://conaliteg.sep.gob.mx/sep/CLMES3S_PP.htm',
      matriz: './RepositorioT/M_AFI/Espanol_3/',
      descarga: './RepositorioT/M_AFI/PDF/MC_LME_3.pdf'
    }, {
      id_grado:'3',
      img: './RepositorioT/M_AFI/img/Matematicas-TercerGrado.png',
      titulo_matriz: 'Matematicas',
      afi: 'https://libros.conaliteg.gob.mx/sep/S3MAT_PP.htm',
      matriz: './RepositorioT/M_AFI/Matematicas_3/',
      descarga: './RepositorioT/M_AFI/PDF/MC_MATE_3.pdf'
    }     
  ]
}
