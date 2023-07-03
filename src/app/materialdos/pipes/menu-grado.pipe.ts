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
        grados.push({ 
          id_grado: '999', 
          grado: 'Todos'
        });
        value.push({ 
          id_grado: elemento.id_grado, 
          grado: elemento.grado,
          id_asignatura: 999,
          asignatura: 'Todos'
        });
        grados.push(elemento);
      }else{
        let status = false;
        grados.forEach(gradosU => {
          if(gradosU.id_grado === elemento.id_grado){
            status = true;
          }
        });

        if(!status){
          value.push({ 
            id_grado: elemento.id_grado, 
            grado: elemento.grado,
            id_asignatura: 999,
            asignatura: 'Todos'
          });
          grados.push(elemento);
        }
      }
    });
    //console.log(grados);
    return grados;
  }

}
