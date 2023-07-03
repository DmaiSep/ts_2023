import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menuAsig'
})
export class MenuAsigPipe implements PipeTransform {
  //ayuda a filtrar el contenido que se relaciona por el grado
  transform(value: any[], grado:Number ) {
    if(grado ===  0 || grado === undefined) {
      return value;
    }
    return value.filter(asignatura => Number(asignatura.id_grado) == grado);
  }

}
