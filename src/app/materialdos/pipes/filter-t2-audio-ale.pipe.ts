import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterT2AudioAle'
})
export class FilterT2AudioAlePipe implements PipeTransform {

  transform(value: any[], perfil: Number, grado:Number , asig: Number, bloque: Number) {
    if(perfil ===  0 || perfil === undefined) {
      return null;
    }

    if(perfil != undefined){
      if( grado == 0 || grado == 999){
        return value.filter(material => Number(material.id_perfil) == Number(perfil));
      }

      
    }


  }

}
