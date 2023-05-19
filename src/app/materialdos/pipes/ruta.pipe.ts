import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ruta'
})
export class RutaPipe implements PipeTransform {
  
  transform(value: any[], ruta: string,apartado: string) {
    let datos = [];
    if( ruta === undefined || apartado === undefined) {
      return null;
    }
    //console.log(value, ruta);
    datos =  value.filter(dir => dir.url === ruta);
    if(datos.length){
      if(apartado === 'modulo'){
        return datos[0].modulo
      }
      return datos[0].seccion

    }
  }

}
