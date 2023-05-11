import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeGrado'
})
export class PipeGradoPipe implements PipeTransform {

  transform(value: any[], grado: Number): unknown {
    if(grado === 0 || grado === undefined) {
      return value;
    }
    
  }

}
