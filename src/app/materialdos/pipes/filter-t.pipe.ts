import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterT'
})
export class FilterTPipe implements PipeTransform {

  transform(value: any[], perfil: Number, grado:Number , asig: Number) {
    let datos = [];
    console.log(perfil, grado, asig);
    if(perfil ===  0 || perfil === undefined) {
      return value;
    }
    if(perfil != undefined && grado == 0 && asig == 0){
      console.log('entra a perfil');
      return value.filter(material => Number(material.perfil) == Number(perfil));
    }
    if(grado != 0 && perfil != undefined && asig == 0){
      console.log('entra a grado');
      datos = value.filter(material => Number(material.perfil) == Number(perfil));
      return datos.filter(material => Number(material.id_grado) == Number(grado));
    }

    if(grado != 0 && perfil != undefined && asig != 0){
      console.log('entra a grado y asignatura ');
      datos = value.filter(material => Number(material.perfil) == Number(perfil));
      datos = datos.filter(material => Number(material.id_grado) == Number(grado));
      return datos.filter(material => Number(material.id_asig) == Number(asig));
    }
    
  }

}
