import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string) {
    if (value.length === 0 || search == '') {
      return value;
    }
    const proarray = [];
    for (const product of value) {
      if (product['Brand'] === search) {
        proarray.push(product);
      }
    }
    return proarray;
  }
}

