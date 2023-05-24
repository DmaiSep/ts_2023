import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any [], termino: String) {
    console.log(termino);
    if(termino === undefined || termino === ''){
      return value;
    }
    let datArr = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < value.length; i ++ ){

      let filtrado = value[i];
      //console.log(filtrado);
      
      //atributos a filtrar se esperan de el array, sobe los grados, bloques, nombre del material
      let id_grado = filtrado.id_grado.toLowerCase();
      let material = filtrado.material.toLowerCase();
      let asignatura = filtrado.asignatura.toLowerCase();
      let grado = filtrado.grado.toLowerCase();
      let titulo_material = filtrado.titulo_material.toLowerCase();


      if( material.indexOf( termino ) >= 0 || asignatura.indexOf( termino ) >= 0 || grado.indexOf( termino ) >= 0  || titulo_material.indexOf( termino ) >= 0 || id_grado.indexOf( termino ) >= 0){
        //console.log(filtrado);
        datArr.push( filtrado )
      }

    }
    return datArr;
  }

}
