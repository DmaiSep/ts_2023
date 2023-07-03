import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterT2'
})
export class FilterT2Pipe implements PipeTransform {

  //filtra el objeto de los materiales por perfil, grado, asignatura
  transform(value: any[], perfil: Number, grado:Number , asig: Number, bloque: Number) {
    let datos = [];
    
    //console.log(perfil, grado, asig, bloque);
    if(perfil ===  0 || perfil === undefined) {
      return value;
    }

    if(perfil != undefined && grado == 0 && asig == 0 ){
     //filtra todos los datos del perfil asignado
      return value.filter(material => Number(material.id_perfil) == Number(perfil));
    }

    if(perfil != undefined && grado != 0  && asig == 0 ){
      //filtra todos los datos cuando grado = 999 y el perfil asignado
      if(Number(grado) == 999){
        return value.filter(material => Number(material.id_perfil) == Number(perfil));
      }
      //filtra los datos del grado asignado y perfil asignado
      datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
      return datos.filter(material => Number(material.id_grado) == Number(grado));
    }

    if(perfil != undefined && grado != 0  && asig != 0){
      //filtra todos los datos cuando asignatura == 999 o  != 0, grado 999 y el perfil asignado
     if(Number(grado) == 999 && Number(asig) != 0 ){
      return value.filter(material => Number(material.id_perfil) == Number(perfil));
     }

     //filtra todos los datos cuando asignatura = 999, grado asignado y el perfil asignado
     if(Number(asig) == 999 ){
        datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
        return datos.filter(material => Number(material.id_grado) == Number(grado));
      }

      if(bloque == 0){
        //filtra todos los datos cuando asignatura asignado, grado asignado, el perfil asignado y bloque 0
        datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
        datos = datos.filter(material => Number(material.id_grado) == Number(grado));
        return datos.filter(material => Number(material.id_asignatura) == Number(asig));
      }else{
        if(bloque == 999){
          //filtra todos los datos cuando asignatura asignado, grado asignado, el perfil asignado y bloque = 999
          datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
          datos = datos.filter(material => Number(material.id_grado) == Number(grado));
          return datos.filter(material => Number(material.id_asignatura) == Number(asig));
        }
        
        //filtra todos los datos cuando asignatura asignado, grado asignado y el perfil asignado
        datos = value.filter(material => Number(material.id_perfil) == Number(perfil));
        datos = datos.filter(material => Number(material.id_grado) == Number(grado));
        datos = datos.filter(material => Number(material.id_asignatura) == Number(asig));
        return datos.filter(material => Number(material.id_bloque) == Number(bloque));

      }
      
    }

    

    
  }

}
