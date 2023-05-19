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
      img: 'https://telesecundaria.sep.gob.mx/Content/Docente/IMG_AFI/LME1.png',
      titulo_matriz: 'Lengua Materna. Español',
      afi: 'https://conaliteg.sep.gob.mx/sep/CLMES1S_PP.htm',
      matriz: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/Espanol_1/',
      descarga: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/PDF/MC_LME_1.pdf'
    }, {
      id_grado:'1',
      img: 'https://telesecundaria.sep.gob.mx/Content/Docente/IMG_AFI/MATE1.png',
      titulo_matriz: 'Matematicas',
      afi: 'https://conaliteg.sep.gob.mx/sep/CMAT1S_PP.htm',
      matriz: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/Matematicas_1/',
      descarga: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/PDF/MC_MATE_1.pdf'
    }, { 
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/Content/Docente/IMG_AFI/LME2.png',
      titulo_matriz: 'Lengua Materna. Español',
      afi: 'https://conaliteg.sep.gob.mx/sep/CLMES2S_PP.htm',
      matriz: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/Espanol_2/',
      descarga: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/PDF/MC_LME_2.pdf'
    }, {
      id_grado:'2',
      img: 'https://telesecundaria.sep.gob.mx/Content/Docente/IMG_AFI/MATE2.png',
      titulo_matriz: 'Matematicas',
      afi: 'https://conaliteg.sep.gob.mx/sep/CMAT2S_PP.htm',
      matriz: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/Matematicas_2/',
      descarga: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/PDF/MC_MATE_2.pdf'
    }, { 
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/Content/Docente/IMG_AFI/LME3.png',
      titulo_matriz: 'Lengua Materna. Español',
      afi: 'https://conaliteg.sep.gob.mx/sep/CLMES3S_PP.htm',
      matriz: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/Espanol_3/',
      descarga: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/PDF/MC_LME_3.pdf'
    }, {
      id_grado:'3',
      img: 'https://telesecundaria.sep.gob.mx/Content/Docente/IMG_AFI/MATE3.png',
      titulo_matriz: 'Matematicas',
      afi: 'https://libros.conaliteg.gob.mx/sep/S3MAT_PP.htm',
      matriz: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/Matematicas_3/',
      descarga: 'https://telesecundaria.sep.gob.mx/Content/Repositorio/M_AFI/PDF/MC_MATE_3.pdf'
    }     
  ]
}
