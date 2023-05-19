import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any [], termino: String): unknown {
    let datArr = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < value.length; i ++ ){

      let filtrado = value[i];
      
      //atributos a filtrar
      let nombre = filtrado.nombre.toLowerCase();
      let aparicion = filtrado.aparicion.toLowerCase();

      if( nombre.indexOf( termino ) >= 0 || aparicion.indexOf( termino ) >= 0  ){
        datArr.push( filtrado )
      }

    }
    return datArr;
  }

}
