import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeGrado'
})
export class PipeGradoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
