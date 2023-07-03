import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterT2Audio'
})
export class FilterT2AudioPipe implements PipeTransform {

  
  //filtra el objeto de los materiales por perfil, grado, asignatura
  transform(value: any[], perfil: Number, grado:Number , asig: Number, bloque: Number) {
    let datos = [];
    //console.log(perfil, grado, asig, bloque);
    if(perfil ===  0 || perfil === undefined) {
      return null;
    }

    if(perfil != undefined){
      if( grado != 0){
          if(asig != 0){
            //filtra todos los datos cuando asignatura == 999 o  != 0, grado 999 y el perfil asignado
            if(Number(asig) != 0 && Number(asig) != 999 ){
              if( Number(bloque) != 0 && Number(bloque) != 999){
                datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
                datos = datos.filter(material => Number(material.id_grado) == Number(grado));
                datos = datos.filter(material => Number(material.id_asignatura) == Number(asig));
                return datos.filter(material => Number(material.id_bloque) == Number(bloque));
              }
              datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
              datos = datos.filter(material => Number(material.id_grado) == Number(grado));
              return datos.filter(material => Number(material.id_asignatura) == Number(asig));
            }
            if(Number(asig) == 999 ){
              datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
              return datos.filter(material => Number(material.id_grado) == Number(grado));
            }
          }
          datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
          return datos.filter(material => Number(material.id_grado) == Number(grado));
      }

      

      
    }
    
    

    

    
  }

}
