import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePerfil'
})
export class PipePerfilPipe implements PipeTransform {

  transform(value: any[], perfil: Number): unknown {
    let datos;
    if(perfil ===  0 || perfil === undefined) {
      return value;
    }
    return value.filter(asignatura => Number(asignatura.perfil) == Number(perfil));
  }

}
