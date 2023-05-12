import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menuGrado'
})
export class MenuGradoPipe implements PipeTransform {
  
  //agrupa los grados
  transform(value: any[]) {
    if(!value.length || value === undefined) {
      return value;
    }
    let grados = [];
    value.forEach((elemento) => {
      if(grados.length == 0){
        grados.push(elemento);
      }else{
        let status = false;
        grados.forEach(gradosU => {
          if(gradosU.id_grado === elemento.id_grado){
            status = true;
          }
        });

        if(!status){
          grados.push(elemento);
        }
      }
    });
    return grados;
  }

}
