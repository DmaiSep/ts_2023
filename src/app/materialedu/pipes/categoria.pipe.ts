import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: any[], categoria: Number) {
    if(categoria ===  0 || categoria === undefined) {
      return value;
    }
    return value.filter(material => Number(material.id_categoria) == Number(categoria));
  }

}
