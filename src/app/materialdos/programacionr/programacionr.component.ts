import { Component } from '@angular/core';

@Component({
  selector: 'app-programacionr',
  templateUrl: './programacionr.component.html',
  styleUrls: ['./programacionr.component.scss']
})
export class ProgramacionrComponent {
  ruta:String = './RepositorioT/programacion_regular/2023/';

  elements: any = [
    {
      uno: 'Semana 1 ',uno_url: 'PROG_TS_2022-23_SEM_1.pdf', 
      dos: 'Semana 2',dos_url: 'PROG_TS_2022-23_SEM_2.pdf', 
      tres: 'Semana 6',tres_url:'PROG_TS_2022-23_SEM_6.pdf', 
      cuatro: 'Semana 10',cuatro_url:'PROG_TS_2022-23_SEM_10.pdf', 
      cinco: 'Semana 15',cinco_url:'PROG_TS_2022-23_SEM_15.pdf', 
      seis: 'Semana 17',seis_url:'PROG_TS_2022-23_SEM_17.pdf'
    },
    {
      uno: 'Semana',uno_url: '', 
      dos: 'Semana 3',dos_url: 'PROG_TS_2022-23_SEM_3.pdf', 
      tres: 'Semana 7',tres_url:'PROG_TS_2022-23_SEM_7.pdf', 
      cuatro: 'Semana 11',cuatro_url:'PROG_TS_2022-23_SEM_11.pdf', 
      cinco: 'Semana 16',cinco_url:'PROG_TS_2022-23_SEM_16.pdf', 
      seis: 'Semana 18',seis_url:'PROG_TS_2022-23_SEM_18.pdf'
    },
    {
      uno: 'Semana',uno_url: '', 
      dos: 'Semana 4',dos_url: 'PROG_TS_2022-23_SEM_4.pdf', 
      tres: 'Semana 8',tres_url:'PROG_TS_2022-23_SEM_8.pdf', 
      cuatro: 'Semana 12',cuatro_url:'PROG_TS_2022-23_SEM_12.pdf', 
      cinco: 'Semana',cinco_url:'', 
      seis: 'Semana 19',seis_url:'PROG_TS_2022-23_SEM_19.pdf'
    },
    {
      uno: 'Semana',uno_url: '', 
      dos: 'Semana5',dos_url: 'PROG_TS_2022-23_SEM_5.pdf', 
      tres: 'Semana 9',tres_url:'PROG_TS_2022-23_SEM_9.pdf', 
      cuatro: 'Semana13',cuatro_url:'PROG_TS_2022-23_SEM_13.pdf', 
      cinco: 'Semana',cinco_url:'', 
      seis: 'Semana 20',seis_url:'PROG_TS_2022-23_SEM_20.pdf'
    },
    {
      uno: 'Semana',uno_url: '', 
      dos: 'Semana',dos_url: '', 
      tres: 'Semana',tres_url:'', 
      cuatro: 'Semana 14',cuatro_url:'PROG_TS_2022-23_SEM_14.pdf', 
      cinco: 'Semana',cinco_url:'', 
      seis: 'Semana',seis_url:''
    },
  ];

  headElements = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre','Enero'];
  
  elements2: any = [
    {
      uno: 'Semana 21',uno_url: 'PROG_TS_2022-23_SEM_21.pdf', 
      dos: 'Semana 24',dos_url: 'PROG_TS_2022-23_SEM_24.pdf', 
      tres: 'Semana 29',tres_url:'PROG_TS_2022-23_SEM_29.pdf', 
      cuatro: 'Semana 31',cuatro_url:'PROG_TS_2022-23_SEM_31.pdf', 
      cinco: 'Semana 36',cinco_url:'PROG_TS_2022-23_SEM_36.pdf', 
      seis: 'Semana 40',seis_url:'PROG_TS_2022-23_SEM_40.pdf'
    },
    {
      uno: 'Semana 22',uno_url: 'PROG_TS_2022-23_SEM_22.pdf', 
      dos: 'Semana 25',dos_url: 'PROG_TS_2022-23_SEM_25.pdf', 
      tres: 'Semana 30',tres_url:'PROG_TS_2022-23_SEM_30.pdf', 
      cuatro: 'Semana 32',cuatro_url:'PROG_TS_2022-23_SEM_32.pdf', 
      cinco: 'Semana 37',cinco_url:'PROG_TS_2022-23_SEM_37.pdf', 
      seis: 'Semana 41',seis_url:'PROG_TS_2022-23_SEM_41.pdf'
    },
    {
      uno: 'Semana 23',uno_url: 'PROG_TS_2022-23_SEM_23.pdf', 
      dos: 'Semana 26',dos_url: 'PROG_TS_2022-23_SEM_26.pdf', 
      tres: 'Semana',tres_url:'', 
      cuatro: 'Semana 33',cuatro_url:'PROG_TS_2022-23_SEM_33.pdf', 
      cinco: 'Semana 38',cinco_url:'PROG_TS_2022-23_SEM_38.pdf', 
      seis: 'Semana 42',seis_url:'PROG_TS_2022-23_SEM_42.pdf'
    },
    {
      uno: 'Semana',uno_url: '', 
      dos: 'Semana 27',dos_url: 'PROG_TS_2022-23_SEM_27.pdf', 
      tres: 'Semana',tres_url:'', 
      cuatro: 'Semana 34',cuatro_url:'PROG_TS_2022-23_SEM_34.pdf', 
      cinco: 'Semana 39',cinco_url:'PROG_TS_2022-23_SEM_39.pdf', 
      seis: 'Semana',seis_url:''
    },
    {
      uno: 'Semana',uno_url: '', 
      dos: 'Semana 28',dos_url: 'PROG_TS_2022-23_SEM_28.pdf', 
      tres: 'Semana',tres_url:'', 
      cuatro: 'Semana 35',cuatro_url:'PROG_TS_2022-23_SEM_35.pdf', 
      cinco: 'Semana',cinco_url:'', 
      seis: 'Semana',seis_url:''
    },

  ];

  headElements2 = ['Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio'];



}
