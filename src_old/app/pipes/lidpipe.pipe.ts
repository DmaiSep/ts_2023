import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lidpipe'
})
export class LidpipePipe implements PipeTransform {

  transform(value: any[], perfil: Number, grado:Number, bloque: Number) {
    let datos = [];
    if(perfil ===  undefined || grado === undefined || bloque === undefined)  {
      return null;
    }
    //console.log(perfil,grado,bloque);
    datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
    datos = datos.filter(material => Number(material.id_grado) == Number(grado));
    return datos.filter(material => Number(material.id_bloque) == Number(bloque));

  }

}
