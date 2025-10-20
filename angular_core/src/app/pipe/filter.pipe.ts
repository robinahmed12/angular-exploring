import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    if (!value || value.length === 0 || !filterString || !propName) {
      return value;
    }

    const resultArray: any[] = [];
    for (const item of value) {
      if (item[propName]?.toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
