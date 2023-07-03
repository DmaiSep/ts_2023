import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pefilContent'
})
export class PefilContentPipe implements PipeTransform {

  transform(value: any[], perfil: Number){
    if(perfil != undefined){
      let dat = value.filter(material => Number(material.id_perfil) == Number(perfil));
      if(dat.length){
        return true;
      }
      return false;

    }
  }

}
