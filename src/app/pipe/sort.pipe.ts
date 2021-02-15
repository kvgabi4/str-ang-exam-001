import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {

    if (!Array.isArray(value) || !key) {
      return value;
    }

    return value.sort((a: any, b: any): any => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] - b[key];
      } else {
        a[key].toString().toLowerCase;
        b[key].toString().toLowerCase;
        return a[key].localeCompare(b[key]);
      }
    })

  }

}
